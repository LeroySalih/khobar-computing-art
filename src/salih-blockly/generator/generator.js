/**
 * @license
 * 
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define generation methods for custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on generating code:
// https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['test_react_field'] = function (block) {
    return 'console.log(\'custom block\');\n';
};

Blockly.JavaScript['test_react_date_field'] = function (block) {
    return 'console.log(' + block.getField('DATE').getText() + ');\n';
};


Blockly.JavaScript['p5_rect'] = function(block) {
    var _x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;;
    var _y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var _width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var _height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var _round = Blockly.JavaScript.valueToCode(block, 'round', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    // TODO: Assemble JavaScript into code variable.
    var code = `rect(${_x}, ${_y}, ${_width}, ${_height}, ${_round});\n`;
    return code;
    };

Blockly.JavaScript['p5_background'] = function(block) {
    var _name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `background(${_name});\n`;
    return code;
    };

Blockly.JavaScript['p5_set_variable'] = function(block) {
    var _name = block.getFieldValue('NAME');
    var _value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `p.state['${_name}'] = ${_value};\n`;
    return code;
    };

Blockly.JavaScript['p5_get_variable'] = function(block) {
    var _name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = `p.state['${_name}']`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
    };

Blockly.JavaScript['p5_sketch'] = function(block) {
    var _variables = Blockly.JavaScript.statementToCode(block, 'VARIABLES');
    var _setup = Blockly.JavaScript.statementToCode(block, 'SETUP');
    var _draw = Blockly.JavaScript.statementToCode(block, 'DRAW');
    // TODO: Assemble JavaScript into code variable.
    var code = `{
        variables: '${_variables}',
        setup: '${_setup}',
        draw: '${_draw}'
    }`;
    return code;
    };

Blockly.JavaScript['p5_setup'] = function(block) {
    var _statements = Blockly.JavaScript.statementToCode(block, 'statements');
    // TODO: Assemble JavaScript into code variable.
    var code = `function setup () {
                    ${_statements}
                };\n`;
    return code;
    };

Blockly.JavaScript['p5_draw'] = function(block) {
    var _statements = Blockly.JavaScript.statementToCode(block, 'statements');
    // TODO: Assemble JavaScript into code variable.
    var code = `function draw () {
                    ${_statements}
                };\n`;
    return code;
    };

Blockly.JavaScript['p5_create_canvas'] = function(block) {
    var _width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
    var _height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `createCanvas(${_width}, ${_height});\n`;
    return code;
    };

Blockly.JavaScript['p5_point'] = function(block) {
    var _x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var _y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `point(${_x}, ${_y});\n`;
    return code;
    };

Blockly.JavaScript['p5_stroke'] = function(block) {
    var _colour = Blockly.JavaScript.valueToCode(block, 'colour', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `stroke(${_colour});\n`;
    return code;
    };

Blockly.JavaScript['p5_fill'] = function(block) {
    var _colour = Blockly.JavaScript.valueToCode(block, 'colour', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `fill(${_colour});\n`;
    return code;
    };

Blockly.JavaScript['p5_stroke_weight'] = function(block) {
    var _weight = Blockly.JavaScript.valueToCode(block, 'weight', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `strokeWeight(${_weight});\n`;
    return code;
    };

Blockly.JavaScript['p5_sys_variable'] = function(block) {
    var _sysvarname = block.getFieldValue('SysVarName');
    // TODO: Assemble JavaScript into code variable.
    var code = `${_sysvarname}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
    };

Blockly.JavaScript['p5_text'] = function(block) {
    var _message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
    var _x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var _y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `text(${_message}, ${_x}, ${_y});\n`;
    return code;
    };

Blockly.JavaScript['p5_push'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'push();\n';
    return code;
    };

Blockly.JavaScript['p5_pop'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'pop();\n';
    return code;
    };

Blockly.JavaScript['p5_rotate'] = function(block) {
    var _angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `rotate(${_angle});\n`;
    return code;
    };

Blockly.JavaScript['p5_translate'] = function(block) {
    var _x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var _y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `translate(${_x}, ${_y});\n`;
    return code;
    };
    


