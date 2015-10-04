<?php
  if (!defined('ABSPATH')) exit;

  add_action('admin_head', 'gavickpro_add_my_tc_button');

  function gavickpro_add_my_tc_button() {
    global $typenow;
    // check user permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages')) {
      return;
    }
    // verify the post type
    if(!in_array($typenow, array('post', 'page')))
      return;

    // check if WYSIWYG is enabled
    if (get_user_option('rich_editing') == 'true') {
      add_filter('mce_external_plugins', 'iasr_add_prism_buttons');
      add_filter('mce_buttons', 'iasr_register_prism_buttons');
    }
  }

  function iasr_add_prism_buttons($plugin_array) {
    $plugin_array['iasr_prism_button'] = get_stylesheet_directory_uri() . '/js/prism-buttons.js';
    return $plugin_array;
  }

  function iasr_register_prism_buttons($buttons) {
    array_push($buttons, ' |', 'iasr_prism_button');
    return $buttons;
  }
?>
