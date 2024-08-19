```mermaid
graph TD
    %% Define actors
    Actor_Potential_Client("Actor: Potential Client"):::actor
    Actor_Internal_CSR("Actor: Internal CSR Rep"):::actor

    %% Flowchart
    Actor_Potential_Client --> Landing_Page[Landing Page]
    Landing_Page ---> Services[Services]
    Landing_Page ---> About_Us[About Us]
    Landing_Page ---> Contact_Us[Contact Us]
    Landing_Page ---> Portfolio_Page[Portfolio]

    Services ---> Services_Landing_Page[Landing Page]
    Services_Landing_Page ----> Serv_Land_Needs([Image, Descriptive Copy])
    Services ---> Services_1[Service 1]
    Services_1 ----> Serv_1_Needs([Image, Descriptive Copy])
    Services ---> Services_2[Service 2]
    Services_2 ----> Serv_2_Needs([Image, Descriptive Copy])
    Services ---> Services_3[Service 3]
    Services_3 ----> Serv_3_Needs([Image, Descriptive Copy])
    Services ---> Services_Contact[Contact Us]


    About_Us ---> About_Us_Landing_Page[Landing Page]
    About_Us_Landing_Page ----> About_Us_Land_Needs([Image, Descriptive Copy])
    About_Us ---> About_Us_1[About Us 1]
    About_Us_1 ----> About_Us_1_Need([Image, Descriptive Copy])
    About_Us ---> About_Us_2[About Us 2]
    About_Us_2 ----> About_Us_2_Need([Image, Descriptive Copy])
    About_Us ---> About_Us_3[About Us Team]
    About_Us_3 ----> About_Us_3_Need([Image, Descriptive Copy])
    About_Us ---> About_Us_Contact_Us[Contact Us]

    Contact_Us ---> Site_Form((Contact Us Form))
    Site_Form ---> Database_Collection[(Customer Database Collection)]
    Site_Form ---> New_Client_Email{Email}
    New_Client_Email ---> Database_Collection
    New_Client_Email ---> Actor_Internal_CSR

    Portfolio_Page ---> Portfolio_Page_Landing[Landing Page]
    Portfolio_Page_Landing ----> Portfolio_Page_Landing_Need([Image, Descriptive Copy])
    Portfolio_Page ---> Portfolio_Page_Landing_1[Portfolio Highlight Site #1]
    Portfolio_Page_Landing_1 ----> Portfolio_Page_Landing_1_Need([Image, Descriptive Copy])
    Portfolio_Page ---> Portfolio_Page_Landing_2[Portfolio Highlight Site #2]
    Portfolio_Page_Landing_2 ----> Portfolio_Page_Landing_2_Need([Image, Descriptive Copy])
    Portfolio_Page ---> Portfolio_Page_Landing_3[Portfolio Grid]
    Portfolio_Page_Landing_3 ----> Portfolio_Page_Landing_3_Need([Image, Descriptive Copy])
    Portfolio_Page ---> Portfolio_Page_Landing_4[Contact Us]
   

    Services_Contact ---> Site_Form
    About_Us_Contact_Us ---> Site_Form
    Portfolio_Page_Landing_4 ---> Site_Form

    %% Style definitions
    classDef actor fill:#f9f,stroke:#333,stroke-width:2px;
    class Actor_Potential_Client,Actor_Internal_CSR actor;
