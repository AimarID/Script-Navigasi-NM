﻿<script type='text/javascript'>
$(&quot;ul li:has(ul)&quot;).addClass(&quot;has-submenu&quot;);$(&quot;ul li ul&quot;).addClass(&quot;sub-menu&quot;);$(&quot;ul.dropdown li&quot;).hover(function(){$(this).addClass(&quot;hover&quot;)},function(){$(this).removeClass(&quot;hover&quot;)});var $menu=$(&quot;#menu&quot;),$menulink=$(&quot;#spinner-form&quot;),$search=$(&quot;#search&quot;),$search_box=$(&quot;.search_box&quot;),$menuTrigger=$(&quot;.has-submenu &gt; a&quot;);$menulink.click(function(e){$menulink.toggleClass(&quot;active&quot;);$menu.toggleClass(&quot;active&quot;);if($search.hasClass(&quot;active&quot;)){$(&quot;.menu.active&quot;).css(&quot;padding-top&quot;,&quot;50px&quot;)}});$search.click(function(e){e.preventDefault();$search_box.toggleClass(&quot;active&quot;)});$menuTrigger.click(function(e){e.preventDefault();var t=$(this);t.toggleClass(&quot;active&quot;).next(&quot;ul&quot;).toggleClass(&quot;active&quot;)});$(&quot;ul li:has(ul)&quot;);$(function(){var e=$(document).scrollTop();var t=$(&quot;.nav_wrapper&quot;).outerHeight();$(window).scroll(function(){var n=$(document).scrollTop();if($(document).scrollTop()&gt;=50){$(&quot;.nav_wrapper&quot;).css(&quot;position&quot;)}else{$(&quot;.nav_wrapper&quot;).css(&quot;position&quot;)}if(n&gt;t){$(&quot;.nav_wrapper&quot;).addClass(&quot;scroll&quot;)}else{$(&quot;.nav_wrapper&quot;).removeClass(&quot;scroll&quot;)}if(n&gt;e){$(&quot;.nav_wrapper&quot;).removeClass(&quot;no-scroll&quot;)}else{$(&quot;.nav_wrapper&quot;).addClass(&quot;no-scroll&quot;)}e=$(document).scrollTop()})})
</script>