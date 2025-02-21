# Create executable for vulkanapp1
add_executable(vulkanapp1
    vulkanapp1.cpp
)

# Find GLFW and GLM
find_package(glfw3 REQUIRED)
find_package(glm CONFIG REQUIRED)

# Vulkan via SDK installation
set(VULKAN_SDK_ENV $ENV{VULKAN_SDK})
if (NOT VULKAN_SDK_ENV)
    message(FATAL_ERROR "VULKAN_SDK environment variable not set. Please ensure Vulkan SDK is installed and VULKAN_SDK is defined.")
endif()

# Include Vulkan headers and link to Vulkan library from SDK
target_include_directories(vulkanapp1 PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}/src
    ${VULKAN_SDK_ENV}/Include
    ${VCPKG_INSTALLATION_ROOT}/x64-linux/include
)

target_link_directories(vulkanapp1 PRIVATE
    ${VULKAN_SDK_ENV}/Lib
    ${VCPKG_INSTALLATION_ROOT}/x64-linux/lib
)

target_link_libraries(vulkanapp1 PRIVATE
    Vulkan          # Link directly from SDK, no Vulkan::Vulkan needed
    glfw
    glm::glm
)

# Installation rule
install(TARGETS vulkanapp1
    RUNTIME DESTINATION bin
)

# Fix missing symbols for GNU/Clang
if(CMAKE_CXX_COMPILER_ID MATCHES "GNU|Clang")
    target_link_options(vulkanapp1 PRIVATE -Wl,--allow-shlib-undefined)
endif()
