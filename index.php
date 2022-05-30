<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phoenix Prime | Testing | Input Pickup Location or Automatic Location</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/index.css" />
</head>
<body>
    <div id="search-box" class="searchBoxClass">
                <form autocomplete="off" id="search-form">
                    <input id="pick-up" type="text" placeholder="Enter pick-up location." required="" class="pac-target-input" autocomplete="off">
                    <button id="search-button" disabled="">
                        <i class="fa fa-search"></i>
                        <i class="input-icon" id="close"></i>
                    </button>
                </form>
                <div class="card-panel" id="output" style="display:none">

                </div>
    </div>
    
<!-- *******************   -->
<!--  !!!!!!!!!!!!!!!!!!!!!!!!!!! -->
<!--  This Code is for only the floating card in right bottom corner -->
<!-- ********************  -->

<!-- /* Overlapping Layout With CSS Flex Box
https://www.youtube.com/watch?v=_HTL0XSMcRQ&list=PL3CQ2dylu_2zkP_YtHhe8e5wcpiSS_yH5&index=136&t=17s
https://codepen.io/Web_Cifar/pen/dyXNVep */
https://codepen.io/FlorinPop17/pen/OJJKQeK
-->


  <div id="automatic-current-location-container">
    <h2 class="logo">Location</h2>
    <p class="author">Click the button below so we can use your current position as the pick-up location.Close this screen if you would prefer to type in your pick-up location.</p>
    <a id="automatic-current-location">Current Location</a>
    <div class="close">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>  

    <script type="text/javascript" src="assets/index.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6L87uIguCEdaV485LPBROtXAf2IPK_1I&libraries=places&callback=initAutocomplete" async defer></script>

</body>
</html>