  <script type="text/javascript">
    videojs("myPlayerID").ready(function() {
      var myPlayer = this;
      myPlayer.on('loadstart',function() {
        myPlayer.muted(true);
        myPlayer.overlay({
          overlays: [{
            align: 'top-left',
            content: myPlayer.mediainfo.custom_fields.name,
            start: 'loadedmetadata',
            end: 'play'
          }]
        });
      });
    });
  </script>