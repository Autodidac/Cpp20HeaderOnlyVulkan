# CMakeList.txt : Top-level CMake project file, do global configuration
# and include sub-projects here.
#
cmake_minimum_required (VERSION 3.8)
project("cmakevulkanapp1")

# Set C++ standard
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Enable Hot Reload for MSVC compilers if supported
if (POLICY CMP0141)
    cmake_policy(SET CMP0141 NEW)
    set(CMAKE_MSVC_DEBUG_INFORMATION_FORMAT "$<IF:$<AND:$<C_COMPILER_ID:MSVC>,$<CXX_COMPILER_ID:MSVC>>,$<$<CONFIG:Debug,RelWithDebInfo>:EditAndContinue>,$<$<CONFIG:Debug,RelWithDebInfo>:ProgramDatabase>>")
endif()

# Enforce install location at top-level
set(CMAKE_INSTALL_PREFIX "${CMAKE_SOURCE_DIR}/built" CACHE PATH "Install path prefix" FORCE)

# Configure vcpkg installation root
if(DEFINED ENV{VCPKG_INSTALLATION_ROOT})
    set(VCPKG_INSTALLATION_ROOT "$ENV{VCPKG_INSTALLATION_ROOT}/vcpkg_installed")
else()
    set(VCPKG_INSTALLATION_ROOT "${CMAKE_SOURCE_DIR}/vcpkg_installed")
endif()

# Include sub-projects
add_subdirectory("cmakevulkanapp1")
#add_subdirectory("vulkanapp1")

#add_subdirectory ("VulkanApplication1")
#add_subdirectory ("VulkanStaticLib1")
