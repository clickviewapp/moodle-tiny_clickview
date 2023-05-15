// This file is part of Moodle - https://moodle.org/
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
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Tiny ClickView Video Options helper.
 *
 * @module      tiny_clickview/options
 * @copyright   2023 ClickView Pty. Limited <info@clickview.com.au>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getPluginOptionName} from 'editor_tiny/options';
import {pluginName} from './common';

// Helper variables for the option names.
const iframe = getPluginOptionName(pluginName, 'iframe');
const eventsApi = getPluginOptionName(pluginName, 'eventsApi');

/**
 * Options registration function.
 *
 * @param {tinyMCE} editor
 */
export const register = (editor) => {
    const registerOption = editor.options.register;

    // For each option, register it with the editor.
    registerOption(iframe, {
        processor: 'string',
    });
    registerOption(eventsApi, {
        processor: 'string',
    });
};

/**
 * Fetch the iframe value for this editor instance.
 *
 * @param {tinyMCE} editor The editor instance to fetch the value for
 * @returns {object} The value of the iframe option
 */
export const getIframe = (editor) => editor.options.get(iframe);

/**
 * Fetch the eventsApi value for this editor instance.
 *
 * @param {tinyMCE} editor The editor instance to fetch the value for
 * @returns {object} The value of the eventsApi option
 */
export const getEventsApi = (editor) => editor.options.get(eventsApi);
