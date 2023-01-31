Code in this file is shared between the editor and client app. Things to keep in mind

- Imports should be light weight because code is used in the client app.
- Do not reference anything outside of this folder.
- Modules within this folder should use relative paths (i.e ./utils/someFile).
- Do not reference any third party libraries.

Eventually this folder should be turned into a shared library.
