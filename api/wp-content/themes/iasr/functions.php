<?php
  defined('ABSPATH') or die('No script kiddies please!');

  // Disable default 'Continue Reading' link
  function boilerplate_continue_reading_link() {
    return false;
  }

  // Load in Prism Buttons 'Plugin'
  include 'prism-buttons.php';
?>
