**GENERATE APK-RELEASE**

move to **jdk/bin** or **C:\\ProgramFile\\Java\\Jdkx.x.x_x\\bin** ,
generate(*dont forget admin prompt*) :

*keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias
-keyalg RSA -keysize 2048 -validity 10000*

-   10000 validity mean 1000days

-   my-upload-key.keystore mean keystore

-   my-key-alias mean aliaskey & remember to take note of the alias

![](media/b7d6956103c10293e70b1c766bee026a.jpg)

move file my-upload-key.keystore to *android/app, paste in folder app.*

![C:\\Users\\chickenronz\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\setgradle.jpg](media/00b86c359d941adb5a6f4fdbc1a6b027.jpg)

Make Sure u do not Write in wrong build.gradle path

![](media/1dbf7c424dcaa26872338ae638f13801.jpg)

Set SignConfig file

![](media/cb7fc236ded45378bcdac42b1a98be40.jpg)

GENERATE APK & TEST INSTALL TO REAL EMULATOR

![](media/2cf4b57b598d64ece560a5d34147058c.jpg)

**VOILAAA**

![](media/a56a72600710b3a69d891284df2fcfbb.jpg)
