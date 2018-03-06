// Add your custom Javascript here

function activateLoader(speed) {
    // console.log("activate")
    var progressbar = $('#progress_bar')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = progressbar.val()

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate)
            $("#scan-id-3").css("display", "none")
            $("#scan-id-5").css("display", "block")
            $("#scan-id-6").css("display", "block")
        }
    }
    var animate = setInterval(function() {
        loading()
    }, time)
}

function reactivateLoader(speed) {
    // console.log("activate")
    var $ppc = $('.progress-pie-chart')
    $ppc.removeClass('gt-50')
    var progressbar = $('#progress_bar')
    max = progressbar.attr('max')
    time = (1000 / max) * speed
    value = 0

    var loading = function() {
        value += 1
        addValue = progressbar.val(value)

        $('.progress-value').html(value + '%')
        var $ppc = $('.progress-pie-chart'),
            deg = 360 * value / 100
        if (value > 50) {
            $ppc.addClass('gt-50')
        }

        $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)')
        $('.ppc-percents span').html(value + '%')

        if (value == max) {
            clearInterval(animate2)
            $("#scan-id-3").css("display", "none")
            $("#scan-id-7").css("display", "block")
            // $("#scan-id-5").css("display", "block")
        }
    }
    var animate2 = setInterval(function() {
        loading()
    }, time)
}

function readURL(input, idType) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()

    reader.onload = function (e) {
        if (idType == "doc") {

            $("#scan-id-1").css("display", "none")
            $("#scan-id-3").css("display", "block")
            $('#uploaded-id').attr('src', e.target.result)
        }
      if (idType == "id") {

        $("#scan-id-1").css("display", "none")
        $("#scan-id-2").css("display", "block")

        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          $("#scan-id-2").css("display", "none")
          $("#scan-id-3").css("display", "block")
          document.body.scrollTop = document.documentElement.scrollTop = 0
        }
        $('#uploaded-id').attr('src', e.target.result)
      }
      if (idType == "video") {
        $("#scan-id-3").css("display", "none")
        $("#scan-id-4").css("display", "block")
        $('#uploaded-video>source').attr('src', e.target.result)
        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          $(location).attr('href', 'pyi-scan-id-uploading')
        }
      }
      if (idType == "selfie") {
          $("#scan-id-3").css("display", "none")
          $("#scan-id-4").css("display", "block")
          $('#uploaded-video>source').attr('src', e.target.result)
      }
        if (idType == "photoId") {

            $("#scan-id-1").css("display", "none")
            $("#scan-id-3").css("display", "block")
            $('#uploaded-id').attr('src', e.target.result)
            activateLoader(2)
        }
        if (idType == "videoSelfie") {
            $("#scan-id-1").css("display", "none")
            $("#scan-id-3").css("display", "block")
            $('#uploaded-video>source').attr('src', e.target.result)
            activateLoader(1)
        }

    }
    reader.readAsDataURL(input.files[0])
  }
}

$("#id-document").change(function(){
  readURL(this, "id")
})

$("#photo-id-document").change(function(){
    readURL(this, "photoId")
})



$("#document").change(function(){
    readURL(this, "doc")
})

// submit photo button action
$("#submit-id-button").on("click", function(e) {
  e.preventDefault()
  $("#scan-id-2").css("display","none")
  $("#scan-id-3").css("display","block")
  document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit photo button action
$("#submit-document-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-1").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit photo button action
$("#submit-document-back-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-3").css("display","none")
    $("#scan-id-1").css("display","block")
    document.getElementById("id-document").value = ''
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit back button action
$("#submit-id-back-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-2").css("display","none")
    $("#scan-id-1").css("display","block")
    document.getElementById("id-document").value = ''
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit back button action
$("#submit-photoId-back-button").on("click", function(e) {
    e.preventDefault()
    reactivateLoader(2)
    $("#scan-id-5").css("display","none")
    $("#scan-id-6").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// submit back button action
$("#video-selfie-back-button").on("click", function(e) {
    e.preventDefault()
    reactivateLoader(2)
    $("#scan-id-5").css("display","none")
    $("#scan-id-6").css("display","none")
    $("#scan-id-3").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

// create back button action
$("#create-video-back-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-3").css("display","none")
    $("#scan-id-2").css("display","block")
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

$("#id-selfie").change(function(){
  readURL(this, "video")
})

$("#selfie").change(function(){
    readURL(this, "selfie")
})

$("#video-selfie").change(function(){
    readURL(this, "videoSelfie")
})

// submit back button action
$("#submit-video-back-button").on("click", function(e) {
    e.preventDefault()
    $("#scan-id-4").css("display","none")
    $("#scan-id-3").css("display","block")
    document.getElementById("id-selfie").value = ''
    document.body.scrollTop = document.documentElement.scrollTop = 0
})

$("#selectAll").on("click", function(e) {
  if (e.target.checked) {
    inputs = $(".token-check").prop('checked', true);
  } else {
    inputs = $(".token-check").prop('checked', false);
  }
})

$("#selectStatus").on("change", function(e) {
  var filterType = e.target.options[e.target.selectedIndex].value;
  $("#token-title").text(filterType);
  var table = $("table")[0].className;
  var tableStatusCol = ($("table")[0].className === "tokenTable") ? 5 : 3;
  var tokenRows = $(".token-row");

  for(var i = 0; i < tokenRows.length; i++) {

    var currentTokenStatus = tokenRows[i].children[tableStatusCol].children[0].innerHTML;

    if (filterType !== "All") {
      if (currentTokenStatus.toLowerCase() === filterType.toLowerCase()) {
        tokenRows[i].style.display = "table-row";
      } else {
        tokenRows[i].style.display = "none";
      }
    } else {
      tokenRows[i].style.display = "table-row";
  }
}
})

$("#modal-create-acc").on("click", function(e){
  e.preventDefault();
  window.parent.document.location.href = e.target.href;
})

$('#modal-verify').on('click', function(e) {
  e.preventDefault();
  window.parent.document.location.href = e.currentTarget.href;
})

$("#modalLoginComplete").on("click", function(e){
  e.preventDefault();
  window.parent.document.location.href = e.target.href;
})

$("#securityCode").on("input", function(e) {
  if (e.currentTarget.value.length == 4) {
    $("#securitycodeContinue").removeClass('button--disabled');
  } else {
    $("#securitycodeContinue").addClass('button--disabled');
  }
})

$("#securitycodeContinue").on("click", function(e) {
  //console.log(e.target.href);
  if (e.currentTarget.href == "https://eredbook-uat.azurewebsites.net/parental/Inbox") {
    window.parent.document.location.href = e.target.href;
  }
})

// expand ID document image in ID checker
$(".idcheck-image-expand-button").on("click", function(e) {
    e.preventDefault()
    $( e.target ).closest(".panel").children().toggleClass( "expanded" )
    $( e.target ).toggleClass( "expanded" )
})

// expand ID document image in ID checker
$(".idcheck-video-paired-button").on("click", function(e) {
    e.preventDefault()

    if ($( e.target ).closest(".panel").children().hasClass('expanded')) {
        $( e.target ).closest(".panel").children().toggleClass( "expanded" )
        $( e.target ).closest(".idcheck-media").children('.idcheck-image').hide()
        $( e.target ).text( "Show document" )
    } else {
        $( e.target ).closest(".panel").children().toggleClass( "expanded" )
        $( e.target ).closest(".idcheck-media").children('.idcheck-image').show()
        $( e.target ).text( "Hide document" )
    }
})

// helper function to place modal window as the first child
// of the #page node
var m = document.getElementById('modal_window'),
    p = document.getElementById('content')

function swap () {
  if (m !== null && p !== null) {
    p.parentNode.insertBefore(m, p) 
  }
}

swap();

// modal window
(function() {

  'use strict'

  // list out the vars
  var mOverlay = getId('modal_window'),
      mOpen = getId('modal_open'),
      mCreate = getId('modal_create'),
      mCreate2 = getId('modal_create2'),
      mCreate3 = getId('modal_create3'),
      mClose = getId('modal_close'),
      modal = getId('modal_holder'),
      emailField = getId('emailAddress'),
      allNodes = document.querySelectorAll("*"),
      modalOpen = false,
      lastFocus,
      i

  // wrap all this and check the modal is on the page first
  if (mOverlay !== null) {
    // Let's open the modal
    function modalShow ( event ) {
      event.preventDefault ? event.preventDefault() : event.returnValue = false
      lastFocus = document.activeElement
      mOverlay.setAttribute('aria-hidden', 'false')
      modalOpen = true
      modal.setAttribute('tabindex', '0')
      modal.forms[0].elements[0].focus()
      modal.focus()
      mOverlay.scrollTop(0)
      emailField.focus()
    }

    // binds to both the button click and the escape key to close the modal window
    // but only if modalOpen is set to true
    function modalClose ( event ) {
      if (modalOpen && ( !event.keyCode || event.keyCode === 27 ) ) {
          mOverlay.setAttribute('aria-hidden', 'true')
          modal.setAttribute('tabindex', '-1')
          modalOpen = false
          lastFocus.focus()
      }
    }

    // Restrict focus to the modal window when it's open.
    // Tabbing will just loop through the whole modal.
    // Shift + Tab will allow backup to the top of the modal,
    // and then stop.
    function focusRestrict ( event ) {
      if (modalOpen && !modal.contains( event.target ) ) {
          event.stopPropagation()
          modal.focus()
      }
    }

    // Close modal window by clicking on the overlay
    mOverlay.addEventListener('click', function( e ) {
      if (e.target == modal.parentNode) {
          modalClose( e )
      }
    }, false)

    // open modal by btn click/hit
    // mOpen.addEventListener('click', modalShow)
    mCreate.addEventListener('click', modalShow, false)
    mCreate2.addEventListener('click', modalShow, false)
    mCreate3.addEventListener('click', function(e) {
      e.preventDefault();
      window.parent.document.location.href = e.target.href
    });
    // close modal by btn click/hit
    mClose.addEventListener('click', modalClose)

    // close modal by keydown, but only if modal is open
    document.addEventListener('keydown', modalClose)

    // restrict tab focus on elements only inside modal window
    for (i = 0; i < allNodes.length; i++) {
      allNodes.item(i).addEventListener('focus', focusRestrict)
    }
  }

  // Let's cut down on what we need to type to get an ID
  function getId ( id ) {
      return document.getElementById(id)
  }
})()

$(document).ready(function () {
  // Turn off jQuery animation
  jQuery.fx.off = true

  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})
