# Epoch Engine

This backup represents version 1.5—a safeguard maintained for those moments when my PC becomes unstable and loses its operating system upon reboot.

## Multiplatform Build System

The engine supports several build environments including CMake, VSCode, and MSVC, allowing you to build on multiple platforms.

---

### On Windows

#### With MSVC (Microsoft Visual C/C++ Studio 2022 Community)
- Open the `Project.sln` file located in the main directory.

#### With VSCode
- Use the provided `tasks.json` file to manage your build tasks.

---

### On Linux

#### With VSCode or VSCodium
- The engine utilizes a CMake-based build system.
- You can build using the task from `tasks.json`, the build buttons provided by the CMake extension, or directly from the command-line terminal.

#### Built-in Fully Autonomous Build Scripts
The repository includes scripts that install the Vulkan SDK, manage dependencies, and compile the project directly from the terminal.

Before using these scripts, make sure they are executable:

```bash
chmod +x ./VulkanSDK/install_vulkansdk_debian.sh
chmod +x ./VulkanSDK/uninstall_vulkansdk_debian.sh
``` End of executable permissions

To install the Vulkan SDK on Debian-based systems, run:

```bash
./VulkanSDK/install_vulkansdk_debian.sh
``` End of installation command

To uninstall the Vulkan SDK, run:

```bash
./VulkanSDK/uninstall_vulkansdk_debian.sh
``` End of uninstallation command

#### Build and Install Commands

You can build and install the engine using the provided scripts. For example:

- **For GCC in Release mode:**
  ```bash
  ./build.sh gcc Release
  ./install.sh gcc Release
  ./run.sh
  ``` End of GCC commands

- **For Clang in Debug mode:**
  ```bash
  ./build.sh clang Debug
  ./install.sh clang Debug
  ``` End of Clang commands

**Note:** For Debug builds, choose the compiler you prefer—either GCC or Clang.
