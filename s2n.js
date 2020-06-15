var metadata_url = 'https://researchworkspace.com/api/metadata/objectfull/5edfcc9c24aa9a002fe0971c?uid=1829643&&lock=true';

//https://researchworkspace.com/api/metadata/objectfull/5edfcc9c24aa9a002fe0971c
//var contacts = metadata.metadata.values.contacts

$.getJSON(metadata_url).then(metadata=>{
    var values = metadata.metadata.values,
        contacts = values.contacts.citation_contacts,
        citation = contacts[0],
        roleMap = {
            principalInvestigator:'principal investigator'
            //need other roles
        };
//        funding_agency = values.dahdahdah;
//        project_program = values.dahdahdahdoh;
        time_period = values.time_period;
        spatial = values.spatial

    //PAGE 1: people and projects
    
    //responsible persons (make loop for multiples)
    $('input[name="firstname"]').val(citation.person.first_name);//citation or points of?
    $('input[name="lastname"]').val(citation.person.last_name);
    $('input[name="email"]').val(citation.address.email);
    $('input[name="suffix"]').val(roleMap[citation.role]);
    $('input[name="institution"]').val(citation.position.organization);
    
    //save person
    $('.persons > button').click();
    
    //related funding agencies
    $('input[name="funding_agency_input"]').val(funding_agency);//need to define
    
    //related projects and/or programs
    $('input[name="project_input"]').val(project_program);//need to define
    
    //PAGE 2: dates and locations
    
    //dates
    $('input[name="startdate"]').val(time_period.coverage[0].range.start);
    $('input[name="enddate"]').val(time_period.coverage[0].range.end);

    //location (northern boundary, etc)
    $('input[name="nb"]').val(spatial.bounds_and_description.bounding_box[0].n);
    $('input[name="sb"]').val(spatial.bounds_and_description.bounding_box[0].s);
    $('input[name="wb"]').val(spatial.bounds_and_description.bounding_box[0].w);
    $('input[name="eb"]').val(spatial.bounds_and_description.bounding_box[0].e);
    
    //ship names or platform
    $('input[name="firstLink"]').val();//need to define
    
    //sea areas or regions
    $('input[name="secondLink"]').val(spatial.bounds_and_description.spatial_description);

    //PAGE 3: data types
    
    //parameter or variable
    $('input[id="data_type_edit_1"]').val();//need to define
    
    // measured or calculated
    $('input[id="MorC_1"]').val();//measured as default?
    
    //units
    $('input[id="unit_1"]').val();//need to define?
    
    // observation type
    $('input[id="obs_type_1"]').val();//in situ as default?
    
    //sampling instrument
    $('input[id="si_1"]').val();//need to define
    
    //sampling and analyzing method
    $('input[id="sna_method_1"]').val();//need to define
    
    //data quality method
    $('input[id="dqi_1"]').val();//need to define
    
    //PAGE 4: package description (use NCEI title?)
    
    //title
    $('input[id="title"]').val(values.description.title);
    
    //abstract
    $('input[id="abstract"]').val(values.description.abstract);
    
    //dataset author list
    $('input[id="author_list"]').val();//build in contacts above?
    
    //purpose
    $('input[id="purpose"]').val(values.description.purpose);
    
    //references
    $('input[id="reference"]').val();//need to define
    
    //PAGE 5: upload & submit
    $('input[id="file_input_1"').val();//can be link to RW file?

 })

