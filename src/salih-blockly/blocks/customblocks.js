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
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';

var testReactField = {
  "type": "test_react_field",
  "message0": "custom field %1",
  "args0": [
    {
      "type": "field_react_component",
      "name": "FIELD",
      "text": "Click me"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_react_field'] = {
  init: function() {
    this.jsonInit(testReactField);
    this.setStyle('loop_blocks');
  }
};

var reactDateField = {
  "type": "test_react_date_field",
  "message0": "date field %1",
  "args0": [
    {
      "type": "field_react_date",
      "name": "DATE",
      "date": "01/01/2020"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_react_date_field'] = {
  init: function() {
    this.jsonInit(reactDateField);
    this.setStyle('loop_blocks');
  }
};

var tank_moveForward = {
  "type": "tank_move_forward",
  "message0": "Move forward %1 steps",
  "args0": [
    {
      "type": "field_input",
      "name": "STEPS",
      "text": "steps"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Move the tank forward",
  "helpUrl": ""
}

Blockly.Blocks['tank_move_forward'] = {
  init: function() {
    this.jsonInit(tank_moveForward);
    this.setStyle('loop_blocks');
  }
};

var p5_rect = {
  "type": "p5_rect",
  "message0": "rect %1 x %2 y %3 width %4 height %5 round %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "width",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "height",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "round",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "Draw a square",
  "helpUrl": ""
}

Blockly.Blocks['p5_rect'] = {
  init: function() {
    this.jsonInit(p5_rect);
    this.setStyle('loop_blocks');
  }
};

var p5_background = {
  "type": "p5_background",
  "message0": "Background %1 Colour: %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "Set the background of the whole sketch.",
  "helpUrl": ""
}

Blockly.Blocks['p5_background'] = {
  init: function() {
    this.jsonInit(p5_background);
    this.setStyle('loop_blocks');
  }
};


var p5_set_variable = {
  "type": "p5_set_variable",
  "message0": "Name %1 = %2",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Name"
    },
    {
      "type": "input_value",
      "name": "VALUE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['p5_set_variable'] = {
  init: function() {
    this.jsonInit(p5_set_variable);
    this.setStyle('loop_blocks');
  }
};

var p5_get_variable = {
  "type": "p5_get_variable",
  "message0": "Get %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "default"
    }
  ],
  "output": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['p5_get_variable'] = {
  init: function() {
    this.jsonInit(p5_get_variable);
    this.setStyle('loop_blocks');
  }
};

var p5_sketch = {
  "type": "p5_sketch",
  "message0": "Sketch %1 Variables %2 Setup %3 Draw %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "VARIABLES"
    },
    {
      "type": "input_statement",
      "name": "SETUP"
    },
    {
      "type": "input_statement",
      "name": "DRAW"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['p5_sketch'] = {
  init: function() {
    this.jsonInit(p5_sketch);
    this.setStyle('loop_blocks');
  }
};

var p5_setup = {
  "type": "p5_setup",
  "message0": "function setup %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['p5_setup'] = {
  init: function() {
    this.jsonInit(p5_setup);
    this.setStyle('loop_blocks');
  }
};

var p5_draw = {
  "type": "p5_draw",
  "message0": "function draw %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['p5_draw'] = {
  init: function() {
    this.jsonInit(p5_draw);
    this.setStyle('loop_blocks');
  }
};

var p5_create_canvas = {
  "type": "p5_create_canvas",
  "message0": "create_canvas %1 width %2 height %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "width",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "height",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "Create a canvas.",
  "helpUrl": ""
}

Blockly.Blocks['p5_create_canvas'] = {
  init: function() {
    this.jsonInit(p5_create_canvas);
    this.setStyle('loop_blocks');
  }
};

var p5_point = {
  "type": "p5_point",
  "message0": "point %1 x %2 y %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "Plot a point.",
  "helpUrl": ""
}

Blockly.Blocks['p5_point'] = {
  init: function() {
    this.jsonInit(p5_point);
    this.setStyle('loop_blocks');
  }
};

var p5_stroke = {
  "type": "p5_stroke",
  "message0": "stroke %1 colour %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "colour",
      "check": "Colour"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "Select the stroke colour.",
  "helpUrl": ""
}

Blockly.Blocks['p5_stroke'] = {
  init: function() {
    this.jsonInit(p5_stroke);
    this.setStyle('loop_blocks');
  }
};

var p5_fill = {
  "type": "p5_fill",
  "message0": "fill %1 colour %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "colour",
      "check": "Colour"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "Select the stroke colour.",
  "helpUrl": ""
}

Blockly.Blocks['p5_fill'] = {
  init: function() {
    this.jsonInit(p5_fill);
    this.setStyle('loop_blocks');
  }
};

var p5_stroke_weight =  {
  "type": "p5_stroke_weight",
  "message0": "stroke_weight %1 weight %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "weight",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "Select the stroke colour.",
  "helpUrl": ""
}

Blockly.Blocks['p5_stroke_weight'] = {
  init: function() {
    this.jsonInit(p5_stroke_weight);
    this.setStyle('loop_blocks');
  }
};

var p5_sys_variable = {
  "type": "p5_sys_variable",
  "message0": "Sys Variable %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "SysVarName",
      "options": [
        [
          "frameCount",
          "frameCount"
        ],
        [
          "mouseX",
          "mouseX"
        ],
        [
          "mouseY",
          "mouseY"
        ],
        [
          "width",
          "width"
        ],
        [
          "height",
          "height"
        ],
        [
          "displayHeight",
          "displayHeight"
        ],
        [
          "displayWidth",
          "displayWidth"
        ],
        [
          "windowHeight",
          "windowHeight"
        ],
        [
          "windowWidth",
          "windowWidth"
        ],
        [
          "pixelDensity",
          "pixelDensity"
        ],

      ]
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "Access a system variable.",
  "helpUrl": ""
}

Blockly.Blocks['p5_sys_variable'] = {
  init: function() {
    this.jsonInit(p5_sys_variable);
    this.setStyle('loop_blocks');
  }
};

var p5_text = {
  "type": "p5_text",
  "message0": "text %1 message %2 x %3 y %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "message",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Access a system variable.",
  "helpUrl": ""
}


Blockly.Blocks['p5_text'] = {
  init: function() {
    this.jsonInit(p5_text);
    this.setStyle('loop_blocks');
  }
};




