<script type="text/javascript">
    videojs("myPlayerID").ready(function() {
      var myPlayer = this;
      myPlayer.on('loadstart',function() {
        myPlayer.muted(true);
        myPlayer.overlay({
          overlays: [{
            align: 'bottom-left',
            content: "name",
            start: 'loadedmetadata',
            end: 'play'
          }]
        });
      });
    });
  </script>