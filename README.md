[![wakatime](https://wakatime.com/badge/user/17eacdf5-0954-4233-89e5-cf09a2e230eb/project/e1a31517-9db1-4413-b2d7-af27bba35efe.svg)](https://wakatime.com/badge/user/17eacdf5-0954-4233-89e5-cf09a2e230eb/project/e1a31517-9db1-4413-b2d7-af27bba35efe)

# Cpp20_Vulkan_Repo_Template_2025

This is the state of Vulkan 2025 - in functional and also header only fashion of course ;)

## Multiplatform Build System

The engine supports several build environments including CMake, VSCode, and MSVC, allowing you to build on multiple platforms.

---

### On Windows

#### With MSVC (Microsoft Visual C/C++ Studio 2022 Community)
- Open the `Project.sln` file located in the main directory.

#### With VSCode
- Use the provided `tasks.json` file to manage your build tasks.
- You can `configure gcc` or `configure clang` and `build gcc` or `build all` there is also a `clean` and `clean all` task options
- The CMake vscode extension is primarily used and will be configured for Linux, but may also work with the build options for that at the bottom of vscode or vscode clones like cursor
- You can `configure CMake` and `build CMake` or `install CMake` using those tasks, this uses the Ninja build system.

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
```

To install the Vulkan SDK on Debian-based systems, run:

```bash
./VulkanSDK/install_vulkansdk_debian.sh
```

To uninstall the Vulkan SDK, run:

```bash
./VulkanSDK/uninstall_vulkansdk_debian.sh
```

#### Build and Install Commands

You can build and install the engine using the provided scripts. For example:

- **For GCC in Release mode:**
  ```bash
  ./build.sh gcc Release
  ./install.sh gcc Release
  ./run.sh
  ```

- **For Clang in Debug mode:**
  ```bash
  ./build.sh clang Debug
  ./install.sh clang Debug
  ```

**Note:** For Debug builds, choose the compiler you prefer—either GCC or Clang.
