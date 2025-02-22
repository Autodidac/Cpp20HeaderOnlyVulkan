// frag.glsl
//#version 450
//layout(location = 0) in vec2 fragTexCoord;
//layout(binding = 1) uniform sampler2D texSampler;
//layout(location = 0) out vec4 outColor;
//void main() {
//    outColor = texture(texSampler, fragTexCoord);
//}

#version 450
layout (location = 0) in vec3 inPosition;
layout (location = 1) in vec2 inTexCoord;

layout (binding = 0) uniform UniformBufferObject {
    mat4 model;
    mat4 view;
    mat4 proj;
} ubo;

layout (location = 0) out vec4 outColor;

void main() {
    gl_Position = ubo.proj * ubo.view * ubo.model * vec4(inPosition, 1.0);
    outColor = vec4(inTexCoord, 0.0, 1.0); // Output texture coordinates as color
}
