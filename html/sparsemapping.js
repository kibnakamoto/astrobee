var sparsemapping =
[
    [ "Creation of sparse maps for robot localization", "sparsemapping.html#autotoc_md383", [
      [ "What is a map", "sparsemapping.html#autotoc_md384", null ],
      [ "Map files", "sparsemapping.html#autotoc_md385", null ],
      [ "ROS node", "sparsemapping.html#autotoc_md386", [
        [ "Residuals", "optimizationcommon.html#autotoc_md329", null ],
        [ "SE3 Local Parameterization", "optimizationcommon.html#autotoc_md330", null ],
        [ "Utilities", "optimizationcommon.html#autotoc_md331", null ],
        [ "PointToPlaneICP", "pointcloudcommon.html#autotoc_md333", null ],
        [ "PointCloudWithKnownCorrespondencesAligner", "pointcloudcommon.html#autotoc_md334", null ],
        [ "Utilities", "pointcloudcommon.html#autotoc_md335", null ],
        [ "Inputs", "sparsemapping.html#autotoc_md387", null ],
        [ "Outputs", "sparsemapping.html#autotoc_md388", null ]
      ] ],
      [ "The environment", "sparsemapping.html#autotoc_md389", null ],
      [ "Tools and procedures", "sparsemapping.html#autotoc_md390", [
        [ "Record a bag", "sparsemapping.html#autotoc_md391", null ],
        [ "Filter the bag", "sparsemapping.html#autotoc_md392", null ],
        [ "Copy the bag from the robot", "sparsemapping.html#autotoc_md393", null ],
        [ "Merging bags", "sparsemapping.html#autotoc_md394", null ],
        [ "Extracting images", "sparsemapping.html#autotoc_md395", null ],
        [ "Building a map", "sparsemapping.html#autotoc_md396", null ],
        [ "Visualization", "sparsemapping.html#autotoc_md397", null ],
        [ "Localize a single frame", "sparsemapping.html#autotoc_md398", null ],
        [ "Testing localization using two maps", "sparsemapping.html#autotoc_md399", null ],
        [ "Testing localization using a bag", "sparsemapping.html#autotoc_md400", null ],
        [ "Extract sub-maps", "sparsemapping.html#autotoc_md401", null ],
        [ "Merge maps", "sparsemapping.html#autotoc_md402", null ],
        [ "How to build a map efficiently", "sparsemapping.html#autotoc_md403", null ],
        [ "Map strategy for the space station", "sparsemapping.html#autotoc_md404", null ],
        [ "Growing a map when more images are acquired", "sparsemapping.html#autotoc_md405", null ],
        [ "Reducing the number of images in a map", "sparsemapping.html#autotoc_md406", null ]
      ] ]
    ] ],
    [ "Map building", "map_building.html", [
      [ "Detailed explanation", "map_building.html#autotoc_md337", [
        [ "Summary", "map_building.html#autotoc_md336", null ],
        [ "Setup the environment", "map_building.html#autotoc_md338", null ],
        [ "Reduce the number of images", "map_building.html#autotoc_md339", null ],
        [ "Building a map", "map_building.html#autotoc_md340", [
          [ "Map building pipeline", "map_building.html#autotoc_md341", [
            [ "Detect interest points", "map_building.html#autotoc_md342", null ],
            [ "Match images", "map_building.html#autotoc_md343", null ],
            [ "Build tracks", "map_building.html#autotoc_md344", null ],
            [ "Incremental bundle adjustment", "map_building.html#autotoc_md345", null ],
            [ "Bundle adjustment", "map_building.html#autotoc_md346", null ],
            [ "Map rebuilding", "map_building.html#autotoc_md347", null ],
            [ "Vocabulary database", "map_building.html#autotoc_md348", null ]
          ] ],
          [ "Building a SURF map only", "map_building.html#autotoc_md349", null ],
          [ "Additional options", "map_building.html#autotoc_md350", null ]
        ] ],
        [ "Map registration", "map_building.html#autotoc_md351", [
          [ "Registration in the granite lab", "map_building.html#autotoc_md352", null ],
          [ "Registration on the ISS", "map_building.html#autotoc_md353", null ],
          [ "Registration in the MGTF", "map_building.html#autotoc_md354", null ]
        ] ],
        [ "Map verification", "map_building.html#autotoc_md355", null ],
        [ "Sparse map performance and quality evaluation on the robot", "map_building.html#autotoc_md356", [
          [ "Stage the new map", "map_building.html#autotoc_md357", [
            [ "Copy the new map on the robot MLP (preferably in /data):", "map_building.html#autotoc_md358", null ],
            [ "On the MLP, move the current map aside:", "map_building.html#autotoc_md359", null ]
          ] ],
          [ "Stage the bag with images:", "map_building.html#autotoc_md361", null ],
          [ "Stage the feature counter utility (should be added to the install at one point):", "map_building.html#autotoc_md362", null ],
          [ "Launch the localization node on LLP", "map_building.html#autotoc_md363", null ],
          [ "Play the bags (on MLP)", "map_building.html#autotoc_md364", null ],
          [ "Enable localization and the mapped landmark production (on MLP)", "map_building.html#autotoc_md365", null ],
          [ "Examine the performance and features on MLP", "map_building.html#autotoc_md366", [
            [ "Look at the load with htop", "map_building.html#autotoc_md367", null ],
            [ "Watch the frequency of feature production", "map_building.html#autotoc_md368", null ],
            [ "Watch the number of features being produced:", "map_building.html#autotoc_md369", null ]
          ] ]
        ] ],
        [ "Verify localization against a sparse map on a local machine", "map_building.html#autotoc_md370", [
          [ "Preparation", "map_building.html#autotoc_md371", null ],
          [ "Start localization", "map_building.html#autotoc_md372", null ],
          [ "Play the bag", "map_building.html#autotoc_md373", null ],
          [ "Enable localization", "map_building.html#autotoc_md374", null ],
          [ "Alternative approach", "map_building.html#autotoc_md375", null ],
          [ "Examining the results", "map_building.html#autotoc_md376", null ]
        ] ],
        [ "Evaluating the map without running the localization node", "map_building.html#autotoc_md377", null ]
      ] ]
    ] ],
    [ "Total Station", "total_station.html", [
      [ "Doing a Survey with the Total Station", "total_station.html#autotoc_md416", null ]
    ] ],
    [ "Granite Lab Registration", "granite_lab_registration.html", [
      [ "Locations of the control points in the granite lab used for registration", "granite_lab_registration.html#autotoc_md378", [
        [ "Point 1", "granite_lab_registration.html#autotoc_md379", null ],
        [ "Point 2", "granite_lab_registration.html#autotoc_md380", null ],
        [ "Point 3", "granite_lab_registration.html#autotoc_md381", null ],
        [ "Point 4", "granite_lab_registration.html#autotoc_md382", null ]
      ] ]
    ] ],
    [ "Faro", "faro.html", null ],
    [ "Building a map with Theia", "theia_map.html", [
      [ "Install Theia's prerequisites", "theia_map.html#autotoc_md407", null ],
      [ "Fetch and build Theia", "theia_map.html#autotoc_md408", null ],
      [ "Hide the conda environment", "theia_map.html#autotoc_md409", null ],
      [ "Set up the environment for Theia and Astrobee", "theia_map.html#autotoc_md410", null ],
      [ "Prepare the data", "theia_map.html#autotoc_md411", null ],
      [ "Run the Astrobee wrapper around the Theia tools", "theia_map.html#autotoc_md412", null ],
      [ "Command line options", "theia_map.html#autotoc_md413", null ],
      [ "Next steps", "theia_map.html#autotoc_md414", null ],
      [ "Auxiliary import_map tool", "theia_map.html#autotoc_md415", null ]
    ] ]
];