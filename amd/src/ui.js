// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Tiny ClickView Video ui helper.
 *
 * @module      tiny_clickview/ui
 * @copyright   2023 ClickView Pty. Limited <info@clickview.com.au>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import Modal from 'tiny_clickview/modal';
import ModalFactory from 'core/modal_factory';
import {getIframe} from "./options";

export const handleAction = (editor) => {
    displayDialogue(editor);
};

/**
 * Get the template context for the dialogue.
 *
 * @param {Editor} editor
 * @param {object} data
 * @returns {object} data
 */
const getTemplateContext = (editor, data) => {
    return Object.assign({}, {
        iframe: getIframe(editor),
    }, data);
};

const displayDialogue = async(editor, data = {}) => {
    const modal = await ModalFactory.create({
        type: Modal.TYPE,
        templateContext: getTemplateContext(editor, data),
        large: true,
    });

    modal.show();

    const pluginFrame = document.getElementById("clickview_iframe");
    const eventsApi = new CVEventsApi(pluginFrame.contentWindow); // eslint-disable-line

    eventsApi.on('cv-lms-addvideo', function(event, detail) {
        editor.execCommand('mceInsertContent', false, detail.embedHtml);
        eventsApi.off('cv-lms-addvideo');
        modal.destroy();
    }, true);
};
