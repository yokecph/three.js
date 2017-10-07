import encodings_fragment from './ShaderChunk/encodings_fragment.glsl';
import encodings_pars_fragment from './ShaderChunk/encodings_pars_fragment.glsl';
import tonemapping_fragment from './ShaderChunk/tonemapping_fragment.glsl';
import tonemapping_pars_fragment from './ShaderChunk/tonemapping_pars_fragment.glsl';


import meshbasic_frag from './ShaderLib/meshbasic_frag.glsl';
import meshbasic_vert from './ShaderLib/meshbasic_vert.glsl';

export var ShaderChunk = {
	encodings_fragment: encodings_fragment,
	encodings_pars_fragment: encodings_pars_fragment,
	tonemapping_fragment: tonemapping_fragment,
	tonemapping_pars_fragment: tonemapping_pars_fragment,

	meshbasic_frag: meshbasic_frag,
	meshbasic_vert: meshbasic_vert
};
