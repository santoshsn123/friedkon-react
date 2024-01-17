export default [
  {
    id: 1,
    title: "Plan Management",
    router: "/plan-management",
    dbTableName: "Plan",
    isEditable: true,
    apiURL: "plan",
    multiRecords: true,
    data: [
      {
        id: 1,
        name: "planTitle",
        displayName: "Plan Title",
        order: 1,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      },
      {
        id: 2,
        name: "planSubText",
        displayName: "Plan SubText",
        order: 2,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
        // options: [
        //   { value: "", label: "Select" },
        //   { value: "option1", label: "Option 1" },
        //   { value: "option2", label: "Option 2" },
        // ],
      },
      {
        id: 3,
        name: "planImage",
        displayName: "Plan Image",
        order: 3,
        editable: true,
        displayOnTable: true,
        input: "image",
        isActive: true,
        dataType: "String",
      },
      {
        id: 4,
        name: "planDescription",
        displayName: "Plan Description",
        order: 4,
        editable: true,
        displayOnTable: true,
        input: "ckeditor",
        isActive: true,
        dataType: "String",
      },
      {
        id: 5,
        name: "planCost",
        displayName: "Plan Cost",
        order: 5,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      },
      // {
      //   id: 6,
      //   name: "availableInRural",
      //   displayName: "Available in Rural Area",
      //   order: 6,
      //   editable: true,
      //   displayOnTable: true,
      //   input: "radio",
      //   isActive: true,
      //   dataType: "String",
      //   options:['Yes','No']
      // },
    ],
  },
  {
    id: 2,
    title: "Book Management",
    router: "/book-management",
    dbTableName: "book",
    isEditable: true,
    apiURL: "book",
    multiRecords: true,
    data: [
      {
        id: 1,
        name: "firstName",
        displayName: "Book Name",
        order: 1,
        editable: true,
        displayOnTable: true,
        input: "text",
        dataType: "String",
      },
      {
        id: 2,
        name: "lastName",
        displayName: "Book Price",
        order: 2,
        editable: true,
        displayOnTable: true,
        input: "text",
        dataType: "String",
      },
    ],
  },
  {
    id: 3,
    title: "Main Banner Text",
    router: "/main-banner-text-management",
    dbTableName: "BannerText",
    isEditable: true,
    apiURL: "banner",
    multiRecords: false,
    data: [
      {
        id: 1,
        name: "subHeading",
        displayName: "Sub Heading",
        order: 1,
        editable: true,
        displayOnTable: true,
        input: "text",
        dataType: "String",
        required: true,
      },
      {
        id: 2,
        name: "heading",
        displayName: "Heading",
        order: 2,
        editable: true,
        displayOnTable: true,
        input: "text",
        dataType: "String",
        required: true,
      },
      {
        id: 3,
        name: "description",
        displayName: "Description",
        order: 3,
        editable: true,
        displayOnTable: true,
        input: "ckeditor",
        dataType: "String",
        required: true,
      },
      {
        id: 4,
        name: "image",
        displayName: "Banner Image",
        order: 4,
        editable: true,
        displayOnTable: true,
        input: "image",
        dataType: "String",
        required: false,
      },
      {
        id: 5,
        name: "bannerimage",
        displayName: "Banner Logo",
        order: 5,
        editable: true,
        displayOnTable: true,
        input: "image",
        dataType: "String",
        required: false,
      },
    ],
  },
  {
    id: 4,
    title: "Below Banner Text",
    router: "/below-banner-text-management",
    dbTableName: "BelowBannerText",
    isEditable: true,
    apiURL: "below-banner-text",
    multiRecords: false,
    data: [
      {
        id: 1,
        name: "title",
        displayName: "Title",
        order: 1,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      },
      {
        id: 2,
        name: "subtitle",
        displayName: "Sub Title",
        order: 2,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      },
      {
        id: 3,
        name: "description",
        displayName: "Description",
        order: 3,
        editable: true,
        displayOnTable: true,
        input: "ckeditor",
        isActive: true,
        dataType: "String",
      }
    ],
  },
  {
    id: 5,
    title: "Quality Text",
    router: "/quality-text-management",
    dbTableName: "QualityText",
    isEditable: true,
    apiURL: "quality-text",
    multiRecords: true,
    data: [
      {
        id: 1,
        name: "title",
        displayName: "Title",
        order: 1,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      },
      {
        id: 2,
        name: "subtitle",
        displayName: "Sub Title",
        order: 2,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      },
      {
        id: 3,
        name: "description",
        displayName: "Description",
        order: 3,
        editable: true,
        displayOnTable: true,
        input: "ckeditor",
        isActive: true,
        dataType: "String",
      },
      {
        id: 4,
        name: "image",
        displayName: "Image",
        order: 4,
        editable: true,
        displayOnTable: true,
        input: "image",
        isActive: true,
        dataType: "String",
      }
    ],
  },{
    id: 6,
    title: "Past Work",
    router: "/past-work-management",
    dbTableName: "PastWork",
    isEditable: true,
    apiURL: "past-work",
    multiRecords: true,
    data: [
      {
        id: 1,
        name: "title",
        displayName: "Text",
        order: 1,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      },
      {
        id: 2,
        name: "image",
        displayName: "Image",
        order: 2,
        editable: true,
        displayOnTable: true,
        input: "image",
        isActive: true,
        dataType: "String",
      }
    ],
  },{
    id: 6,
    title: "Feature Heading",
    router: "/feature-heading-management",
    dbTableName: "FeatureHeading",
    isEditable: true,
    apiURL: "feature-heading",
    multiRecords: false,
    data: [
      {
        id: 1,
        name: "title",
        displayName: "Text",
        order: 1,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      },
      {
        id: 2,
        name: "subtitle",
        displayName: "Sub Title",
        order: 2,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      },
      {
        id: 3,
        name: "image",
        displayName: "Image",
        order: 3,
        editable: true,
        displayOnTable: true,
        input: "image",
        isActive: true,
        dataType: "String",
      }
    ],
  },{
    id: 7,
    title: "Features Management",
    router: "/feature-management",
    dbTableName: "Features",
    isEditable: true,
    apiURL: "features",
    multiRecords: true,
    data: [
      {
        id: 1,
        name: "title",
        displayName: "Text",
        order: 1,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      },
      {
        id: 2,
        name: "description",
        displayName: "Description",
        order: 2,
        editable: true,
        displayOnTable: true,
        input: "ckeditor",
        isActive: true,
        dataType: "String",
      },
      {
        id: 3,
        name: "image",
        displayName: "Image",
        order: 3,
        editable: true,
        displayOnTable: true,
        input: "image",
        isActive: true,
        dataType: "String",
      }
    ],
  }
  ,{
    id: 8,
    title: "Testimonial Heading",
    router: "/testimonial-heading-management",
    dbTableName: "TestimonialHeading",
    isEditable: true,
    apiURL: "testimonial-heading",
    multiRecords: false,
    data: [
      {
        id: 1,
        name: "title",
        displayName: "Title",
        order: 1,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      },
      {
        id: 2,
        name: "subTitle",
        displayName: "Sub Title",
        order: 2,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      }
    ],
  },{
    id: 9,
    title: "Testimonial",
    router: "/testimonial-management",
    dbTableName: "Testimonial",
    isEditable: true,
    apiURL: "testimonial",
    multiRecords: true,
    data: [
      {
        id: 1,
        name: "name",
        displayName: "Client Name",
        order: 1,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      },
      {
        id: 2,
        name: "position",
        displayName: "Client Position",
        order: 2,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      }
      ,{
        id: 3,
        name: "feedback",
        displayName: "Clients Feedback",
        order: 3,
        editable: true,
        displayOnTable: true,
        input: "ckeditor",
        isActive: true,
        dataType: "String",
      }
      ,{
        id: 4,
        name: "picture",
        displayName: "Clients Picture",
        order: 4,
        editable: true,
        displayOnTable: true,
        input: "image",
        isActive: true,
        dataType: "String",
      }
    ],
  },{
    id: 10,
    title: "Welcome Text Management",
    router: "/welcome-text-management",
    dbTableName: "WelcomeText",
    isEditable: true,
    apiURL: "welcometext",
    multiRecords: true,
    data: [
      {
        id: 1,
        name: "title",
        displayName: "Title",
        order: 1,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      },
      {
        id: 2,
        name: "subtitle",
        displayName: "Sub Title",
        order: 2,
        editable: true,
        displayOnTable: true,
        input: "text",
        isActive: true,
        dataType: "String",
      }
      ,{
        id: 3,
        name: "description",
        displayName: "Description",
        order: 3,
        editable: true,
        displayOnTable: true,
        input: "ckeditor",
        isActive: true,
        dataType: "String",
      }
    ],
  }
 
];
