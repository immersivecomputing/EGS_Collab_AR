# EGS Collab AR 

## Interactive Model Viewer
<a href="https://immersivecomputing.github.io/EGS_Collab_AR/webxr.html"><img src="https://immersivecomputing.github.io/EGS_Collab_AR/media/GoButton.png" width="150" height="50">

![QR_Interactive](https://immersivecomputing.github.io/EGS_Collab_AR/media/QR_interactive.png)
<br />To follow the AR link at the bottom of the visualization you will either need to be using Chrome on Android, or [Mozilla's WebXR Viewer app](https://apps.apple.com/us/app/webxr-viewer/id1295998056) on iOS.  
  
### Documentation

#### Introduction
The interactive EGS Collab AR visualization is built on the [ThreeJS library](threejs.org). Data is uploaded to this site using the same formatting currently used by EGS researchers, with the tool being able to interpret those formates and visualize them within a browser window. This makes the visualization incredibly accessible and able to be updated as quickly as new data becomes available.

The intention is for the tool to eventaully be able to ingest real-time data streams to provide up to the minute visualization of ongoing experiments. This will enable both onsite operations to make critical decisions, as well as enabling remote observers to view the data streams simultaneaously and potentially provide additional input.

#### Mouse controls
  Left mouse = Orbit
  <br />Right mouse = Pan
  <br />Scroll wheel = Zoom
#### Menu
<dl>
  <dt>Base Objects</dt>
  <dd>Tunnel = 4100 level tunnel inner surface based on LiDAR scan
  <br />Boreholes = Gyro positions of logged boreholes (must be selected prior to using any of the logging data below)
  <br />Grid = Reference grid</dd>
  <dt>Logging</dt>
  <dd>Log Type = Drop down menu to show the following data types:
  <br />    Vp - P wave velocity
  <br />    Vs - S wave velocity
  <br />    Vp/Vs - P/S velocity ratio</dd>
  <dt>Faults</dt>
  <dd>Show faults = Toggle to how/hide any fault data, faults are colored by type
  <br />  Mean Stress Ratio = Slider to filter visibility of faults based on mean stress ratio</dd>
  <dt>Bulk Conductivity</dt>
  <dd>Show surfaces = Toggle to how/hide modelled bulk conductivity isosurfaces
  <br />  Conductivity g.t. = Slider to filter visibility of isosurfaces greater than this value
  <br />  Opacity = Slider to control the opacity of the isosurfaces</dd>
  <dt>Realtime Data</dt>
  <dd>Device position = Test animation demoing the ingest of a realtime feed to display data streams in real-time</dd>
</dl>


## Alternative Static Models
Initial testing of AR models using quick viewers for both iOS and Android. The models here are simple GLTF and USDZ models that use the inbuilt AR capabilties of the iOS and Android platforms. The models here are older versions than that used in the interactive model viewer above, but shows off the capability of simply serving up 3D models using AR via a URL or QR code. This could be easily adapted to be used within presentations.

[View on iOS (Safari)](https://immersivecomputing.github.io/EGS_Collab_AR/USD/MasterParent.usdz)

![QR_iOS](https://immersivecomputing.github.io/EGS_Collab_AR/media/QR_ios.png)

<a href="intent://arvr.google.com/scene-viewer/1.0?file=https://immersivecomputing.github.io/EGS_Collab_AR/GLTF/MasterParent.glb#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;">View on Android (Chrome)</a>

![QR_Android](https://immersivecomputing.github.io/EGS_Collab_AR/media/QR_android.png)
