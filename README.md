# epoch engine
This is a backup for 1.5 since my pc is unstable and I lose operating system on reboots





## Multiplatform Build System
Including CMake, vscode, msvc, builds.





### On Windows






#### With MSVC - Microsoft Visual C/C++ Studio 2022 Community

Project.sln - Solution File in the Main Directory



#### With VSCode
tasks.json




### On Linux




#### With VSCode or VSCodium
Uses a CMake Build system you can run tasks.json task, or build buttons at the bottom of the CMake Extension
Or better yet Build And Run From Command-Line Terminal below!




#### Built-in Fully Autonomous Build Scripts - Install VulkanSDK, Dependencies, and Compile Directly from Commandline in Linux Terminal
you will need to chmod -x the following to use:
./VulkanSDK/install_vulkansdk_debian.sh
./VulkanSDK/uninstall_vulkansdk_debian.sh - to uninstall obviously

./build.sh gcc Release
./install.sh gcc Release
./run.sh

or:

./build.sh clang Debug
./install.sh clang Debug


Notice: the difference in compiler in the Debug builds, clang vs gcc which ever compiler you prefer to use.
