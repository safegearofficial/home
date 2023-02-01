<html>
<head>
  <style>
    /* Style for the tabbed interface */
    .tabbed-interface {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
    }

    /* Style for the tabs */
    .tab {
      padding: 10px 20px;
      border: 1px solid gray;
      border-bottom: none;
      cursor: pointer;
      margin-right: 10px;
    }

    /* Style for the active tab */
    .tab.active {
      border-bottom: 1px solid gray;
    }

    /* Style for the tab content */
    .tab-content {
      display: none;
      padding: 20px;
      border: 1px solid gray;
      margin-top: 10px;
    }

    /* Style for the active tab content */
    .tab-content.active {
      display: block;
    }
  </style>
</head>
<body>
  <!-- Create the tabbed interface -->
  <div class="tabbed-interface">
    <!-- Create the tabs -->
    <div class="tab active" id="tab-1" onclick="showTabContent('tab-1')">Tab 1</div>
    <div class="tab" id="tab-2" onclick="showTabContent('tab-2')">Tab 2</div>
    <div class="tab" id="tab-3" onclick="showTabContent('tab-3')">Tab 3</div>
  </div>
  <!-- Create the tab content -->
  <div class="tab-content active" id="tab-1-content">
    <!-- Content for Tab 1 -->
    <p>This is the content for Tab 1</p>
  </div>
  <div class="tab-content" id="tab-2-content">
    <!-- Content for Tab 2 -->
    <p>This is the content for Tab 2</p>
  </div>
  <div class="tab-content" id="tab-3-content">
    <!-- Content for Tab 3 -->
    <p>This is the content for Tab 3</p>
  </div>

  <!-- Add the JavaScript code -->
  <script>
    function showTabContent(tabId) {
      const tabs = document.querySelectorAll(".tab");
      const tabContents = document.querySelectorAll(".tab-content");
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      document.getElementById(tabId).classList.add("active");
      document.getElementById(tabId + "-content").classList.add("active");
    }
  </script>
</body>
</html>
