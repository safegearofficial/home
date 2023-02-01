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
    <div class="tab active" data-tab="tab-1">Tab 1</div>
    <div class="tab" data-tab="tab-2">Tab 2</div>
    <div class="tab" data-tab="tab-3">Tab 3</div>
  </div>
  <!-- Create the tab content -->
  <div class="tab-content active" id="tab-1">
    <!-- Content for Tab 1 -->
    <p>This is the content for Tab 1</p>
  </div>
  <div class="tab-content" id="tab-2">
    <!-- Content for Tab 2 -->
    <p>This is the content for Tab 2</p>
  </div>
  <div class="tab-content" id="tab-3">
    <!-- Content for Tab 3 -->
    <p>This is the content for Tab 3</p>
  </div>

  <!-- Add the JavaScript code -->
  <script>
    // Get all the tabs and tab content
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    // Function to show the content for a specific tab
    function showTabContent(tabId) {
      // Hide all the tab contents
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      // Show the content for the selected tab
      document.getElementById(tabId).classList.add("active");
    }

    // Loop through all the tabs and add an event listener for when they are clicked
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remove the active class from all the tabs
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        // Add the active class to the selected tab
        tab.classList.add("active");
        //
