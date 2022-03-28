# EGS Collab AR 

## Interactive Model
[Interactive 3D viewer (Any platform)](https://immersivecomputing.github.io/EGS_Collab_AR/webxr.html)
<br />To follow the AR link at the bottom of the visualization you will either need to be using Chrome on Android, or [Mozilla's WebXR Viewer app](https://apps.apple.com/us/app/webxr-viewer/id1295998056) on iOS.

![QR_Interactive](https://immersivecomputing.github.io/EGS_Collab_AR/media/QR_interactive.png)

### Documentation

#### Introduction

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
[View on iOS (Safari)](https://immersivecomputing.github.io/EGS_Collab_AR/USD/MasterParent.usdz)

![QR_iOS](https://immersivecomputing.github.io/EGS_Collab_AR/media/QR_ios.png)

<a href="intent://arvr.google.com/scene-viewer/1.0?file=https://immersivecomputing.github.io/EGS_Collab_AR/GLTF/MasterParent.glb#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;">View on Android (Chrome)</a>

![QR_Android](https://immersivecomputing.github.io/EGS_Collab_AR/media/QR_android.png)
