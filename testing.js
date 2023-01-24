var questions = [
    {
        "Q": "On which custom object can an Administrator disable system notes?",
        "OPTIONS": {
            "A": "Field on a Custom Record",
            "B": "Custom Record",
            "C": "Custom Transaction Body Field",
            "D": "Custom Entity Field"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which feature provides information about a specific field and can be accessed while ending or viewing a record? The Internal ID of the field can also be seen here.",
        "OPTIONS": {
            "A": "Help Guide",
            "B": "Help",
            "C": "Field Description",
            "D": "Field Level Help"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "When using the Global Search to find records, how can users display inactive records in the search results?",
        "OPTIONS": {
            "A": "Re-activate the record so that it appears in the Global Search results set",
            "B": "Change the Display Type on the record",
            "C": "Prefix the search keyword with the correct record type (for example, “cu” for Customer).",
            "D": "Enable the user preference Include Inactives In Global & Quick Search"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "Which feature cannot be disabled once it is enabled?",
        "OPTIONS": {
            "A": "Expense Allocation",
            "B": "Advanced Revenue Management",
            "C": "Vendor Prepayments",
            "D": "Consolidated Payments"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "Which portlet shows a graphical representation of Key Performance Indicator (KPI) data?",
        "OPTIONS": {
            "A": "Key Performance Indicators",
            "B": "KPI Meter",
            "C": "KPI Scorecard",
            "D": "Trend Graphs"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "Where should additional restrictions be added to further refine the results of a Saved Search?",
        "OPTIONS": {
            "A": "Available Filters",
            "B": "Highlighting",
            "C": "Criteria",
            "D": "Results"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "Which criteria are required for a field to be available for Mass Update? (Choose two.)",
        "OPTIONS": {
            "A": "For custom fields, the field must not be stored and must have a sourcing relationship",
            "B": "For standard fields, the field must have dependencies on other fields.",
            "C": "The field must be displayed on the preferred form for the record type being updated",
            "D": "The field must support inline editing."
        },
        "ANSWER": [
            "C",
            "D"
        ]
    },
    {
        "Q": "Which Select All checkbox under the Audience subtab defaults to checked when a Saved Search is set to Public?",
        "OPTIONS": {
            "A": "Roles",
            "B": "Employees",
            "C": "Partners",
            "D": "Subsidiaries"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which statements describe the behavior for assigning territories to cases? (Choose two.)",
        "OPTIONS": {
            "A": "Setting the Default Round-Robin territory to Inactive marks unmatched cases as Unassigned.",
            "B": "The Default Round-Robin territory always has last priority.",
            "C": "Re-assigning existing cases to case territories is not allowed.",
            "D": "NetSuite assigns cases to the best match after reviewing all case territories."
        },
        "ANSWER": [
            "A",
            "D"
        ]
    },
    {
        "Q": "Which statement is true about NetSuite sessions?",
        "OPTIONS": {
            "A": "Administrators can configure the Idle Session Timeout per user, on the user Employee record",
            "B": "The absolute NetSuite user interface session timeout is 180 minutes.",
            "C": "A warning with a 180-second countdown shows before an idle session timeout occurs.",
            "D": "Due to session synchronization, logging out of one tab ends the session for all other tabs in the same account"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "A user renamed the Customer entity record to Client in the Rename Records/Transactions Page. After navigating to Lists > Relationships, the user still sees Customer as the name of the record instead of Client. Why is this the case?",
        "OPTIONS": {
            "A": "The user created a custom Center tab named Client under Lists > Relationships. Name changes are applied to standard NetSuite element names, but not to customized elements.",
            "B": "The user renamed the Customer to Client in the English US language, but is currently using English UK as the language under Home > Set Preferences > General > Localization > Language",
            "C": "The user must have at least a Full/Edit level permission to Rename Records/Transactions in order for changes to save.",
            "D": "The user is logged into another role that uses the classic Center tab. Since renaming records or transactions is a user preference, the name change does not apply to that role."
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which portlet displays summary data from reports or Saved Searches for selected date ranges, with options to show comparisons between date ranges and to highlight results not meeting defined thresholds?",
        "OPTIONS": {
            "A": "Reports Snapshot",
            "B": "Key Performance Indicators",
            "C": "Account Reconciliation Summary",
            "D": "SMT Links"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "What Subscription Status should the Administrator select so that customers receive email campaigns?",
        "OPTIONS": {
            "A": "Hard Opt-in",
            "B": "Soft Opt-in",
            "C": "Hard Subscribe",
            "D": "Subscribe"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which statement is true about access levels for NetSuite permissions?",
        "OPTIONS": {
            "A": "The Create access level allows editing records.",
            "B": "The Edit access level does not allow deleting records.",
            "C": "The Partial access level allows editing but not creating records.",
            "D": "The View access level does not allow printing records."
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which transaction will have a GL Impact on Accounts Payable?",
        "OPTIONS": {
            "A": "Pending Bill Purchase Order",
            "B": "Cancelled Bill",
            "C": "Open Bill with Payment Hold",
            "D": "Fully Billed Purchase Order"
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "Editing inventory items inline is not functioning in Lists > Accounting > Items. What could be causing the problem?",
        "OPTIONS": {
            "A": "The user needs to select an Item Type before enabling Inline Editing.",
            "B": "The Allow Inline Editing for Inventory Items preference is not checked.",
            "C": "Inline Editing is not possible with inventory items."
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which Source can automatically create Lead records?",
        "OPTIONS": {
            "A": "Web Site",
            "B": "Chat",
            "C": "Campaigns",
            "D": "Email"
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "Which statement is true about using Quick Accept in Event records?",
        "OPTIONS": {
            "A": "Quick Accept can be performed through the Calendar portlet.",
            "B": "Enable the Quick Accept preference under Setup > Activities > Calendar Preferences.",
            "C": "The Event record should be in Edit mode to perform Quick Accept.",
            "D": "The Quick Accept button provides users an option to mark events as Tentative or Accepted."
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "What kind of custom field can Administrators create to add a column on the Item sublist of Sales Orders?",
        "OPTIONS": {
            "A": "Custom Transaction Body field",
            "B": "Custom Transaction Line fields",
            "C": "Custom Item fields",
            "D": "Custom Transaction Item options"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which user-level preference lets you choose whether to print records in PDF or HTML format?",
        "OPTIONS": {
            "A": "Print Template",
            "B": "PDF Language",
            "C": "PDF Page Orientation",
            "D": "Print Using HTML"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "When creating Item records, which item type does not require setting up an Income Account?",
        "OPTIONS": {
            "A": "Assembly/Bill of Materials",
            "B": "Item Group",
            "C": "Kit/Package",
            "D": "Kit/Package Items"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which statement is true about Custom Roles?",
        "OPTIONS": {
            "A": "It is not possible to change the Center Type of created Custom Roles.",
            "B": "Grant employees access from the Users subtab of a Custom Role record.",
            "C": "Custom Roles can be created through CSV Import.",
            "D": "It is not possible to make copies of a Custom Role."
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which New Release portlet resource allows users to watch presentations and demonstrations on new features and enhancements in Suite Answers?",
        "OPTIONS": {
            "A": "Training Resources",
            "B": "Sneak Peeks",
            "C": "Release Notes",
            "D": "Release Preview Test Plan"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "When creating a new Employee record, a user is unable to change the value in the Job Title field. What could be the cause?",
        "OPTIONS": {
            "A": "Field Sourcing is not set.",
            "B": "Store Value is unchecked.",
            "C": "The field is set to Inactive.",
            "D": "Field Display Type is set to Inline on the custom form."
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "Which feature separates the Shipping and the Billing processes in NetSuite?",
        "OPTIONS": {
            "A": "Advanced Accounting",
            "B": "Advanced Shipping Integration",
            "C": "Advanced Billing",
            "D": "Advanced Shipping"
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "What is the max time between password changes? (days)",
        "OPTIONS": {
            "A": "60",
            "B": "120",
            "C": "30",
            "D": "360"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "An Administrator would like to track changes to the item quantity on a Sales Order. Which functionality would the Administrator use?",
        "OPTIONS": {
            "A": "Line-Level Audit Trail for Transactions",
            "B": "Transaction Audit Trail",
            "C": "Transaction System Notes",
            "D": "Track Changes Option"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "Which record is a non-posting transaction?",
        "OPTIONS": {
            "A": "Return Receipts",
            "B": "Credit Memo",
            "C": "Sales Order",
            "D": "Statement Charges"
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "An Administrator renamed the Customer record type to Client and you would like to search for a customer named Acme Inc. Which keywords would you enter in a Global Search? (Choose two.)",
        "OPTIONS": {
            "A": "'Acme%'",
            "B": "cl: Acme Inc",
            "C": "Acme Inc",
            "D": "cu: Acme Inc"
        },
        "ANSWER": [
            "A",
            "D"
        ]
    },
    {
        "Q": "Which Subsidiary Restriction type limits a role's access to a selected subsidiary on their Employee record.",
        "OPTIONS": {
            "A": "Employee Subsidiary",
            "B": "All",
            "C": "Subsidiary",
            "D": "Selected"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "How can an Administrator access open case tickets submitted to NetSuite Support by another user?",
        "OPTIONS": {
            "A": "Using the Administrator role, navigate to Lists > Support > Cases.",
            "B": "In SuiteAnswers, below the Contact Support Online button, click the Open Cases link.",
            "C": "Access the Help Center and search for Case Tickets.",
            "D": "Click the NetSuite Account Center portlet link in the Support tab."
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Maya is using a custom role that has the Import CSV File permission. On the Import Options page of the CSV Import Assistant, Maya can only select Data Handling of Add. What is the reason for this?",
        "OPTIONS": {
            "A": "The custom role has the Edit level permission for the record type she is importing.",
            "B": "The custom role's permission level for Import CSV File is not set to Full.",
            "C": "The custom role has the Create permission level for the record type she is importing.",
            "D": "The custom role's permission level for Import CSV File is set to Create."
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "A user is trying to view a standard report in NetSuite. The report has been loading for three minutes. The user suspects that the slowness is caused by using a recently installed browser. Which of the following actions will confirm that the performance issue is caused by the browser or not?",
        "OPTIONS": {
            "A": "Use the Application Performance Management to improve performance.",
            "B": "Run the same report in a different window while the original report is still running.",
            "C": "Double-click the Oracle NetSuite logo and look at Browser Time.",
            "D": "Log in to NetSuite using a different browser and check the report performance."
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which feature allows customers to view an online transaction history, get quotes, and make payments within NetSuite?",
        "OPTIONS": {
            "A": "Web Site",
            "B": "Payment Center",
            "C": "Customer Hub",
            "D": "Customer Access"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "Which statement is true regarding the Create New menu in NetSuite?",
        "OPTIONS": {
            "A": "Options in the Create New menu can be personalized through the Set Preferences page.",
            "B": "The Create New menu includes links to create new transactions only.",
            "C": "The Create New menu is visible only on the Home dashboard.",
            "D": "Available options are limited by the role a user is logged in with."
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Where can a user add external URLs to appear on the Home dashboard?",
        "OPTIONS": {
            "A": "External Links Portlet",
            "B": "Bookmarks",
            "C": "Shortcuts Portlet",
            "D": "Personalize Dashboard"
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "Given the following settings: \n Customer Credit Limit Handling = Enforce Holds \n Customer Credit Limit Includes Orders = True \n How can you create Sales Orders for a Customer that has reached their Credit Limit?",
        "OPTIONS": {
            "A": "Use the Standard Sales Order - Cash Sale form",
            "B": "Use the Standard Sales Order - Invoice form",
            "C": "Select a higher Order Priority for the Customer",
            "D": "Select the Override Credit Limit on the Sales Order"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "When setting up security questions, how many times can users dismiss the prompt before it becomes mandatory?",
        "OPTIONS": {
            "A": "2",
            "B": "3",
            "C": "5",
            "D": "6"
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "Which feature enables users to create custom Classifications in NetSuite?",
        "OPTIONS": {
            "A": "Custom Segments",
            "B": "Custom Sections",
            "C": "Custom Divisions",
            "D": "Custom Classifications"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which actions can users perform from the Settings portlet? (Choose two.)",
        "OPTIONS": {
            "A": "Add Permissions",
            "B": "Create a Custom Record",
            "C": "Enable Features",
            "D": "Personalize Dashboard",
            "E": "Change Password"
        },
        "ANSWER": [
            "D",
            "E"
        ]
    },
    {
        "Q": "Which statement explains why an inactive classification still appears in Financial Reports?",
        "OPTIONS": {
            "A": "The accounting preference Include Inactive Classifications is checked.",
            "B": "Inactive classifications still appear to provide historical reporting and to avoid unbalanced totals.",
            "C": "The Administrator customized the report using the Financial Report Builder to include the inactive classification.",
            "D": "Inactive classifications show, but with the identifier (Inactive)."
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which feature enables users to invoice customers for time, items, and reimbursable expenses incurred",
        "OPTIONS": {
            "A": "Bill Costs To Customers",
            "B": "Charge-Based Billing",
            "C": "Expense Billing",
            "D": "Billing Operations"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "When creating a Payment Method, what Type applies to payments that occur outside of NetSuite (for example, cash payments)?",
        "OPTIONS": {
            "A": "External Checkout",
            "B": "Offline",
            "C": "Pay By Reference",
            "D": "General Token"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "What Subsidiary type is used to eliminate revenue and expenses at the consolidated level, removing the effect of transactions between subsidiaries?",
        "OPTIONS": {
            "A": "Consolidation Subsidiary",
            "B": "Elimination Subsidiary",
            "C": "Parent Subsidiary ",
            "D": "Child Subsidiary "
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which action can a Sales Rep perform in the Forecast Editor? ",
        "OPTIONS": {
            "A": "Inactivate transactions to exclude in the Forecast Report.",
            "B": "Edit all transactions that make up their sales forecast. ",
            "C": "Adjust the probability and status of opportunities in the forecast. ",
            "D": "Edit their quota to override their sales forecast. "
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "Which two can users rename on the Rename Records/Transactions page? (Choose two.) ",
        "OPTIONS": {
            "A": "Entities",
            "B": "Account types",
            "C": "Report types",
            "D": "Units of Measure"
        },
        "ANSWER": [
            "A",
            "B"
        ]
    },
    {
        "Q": "Which URL accesses the release Preview Environment?",
        "OPTIONS": {
            "A": "https://system.beta.netsuite.com",
            "B": "https://release-preview.netsuite.com",
            "C": "https://beta.netsuite.com",
            "D": "https://system.netsuite.com"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "How can a standard field be moved to a different subtab on a custom form?",
        "OPTIONS": {
            "A": "Go to Customization > Forms > Subtabs, then drag and drop the subtabs.",
            "B": "Customize a form and click Move Elements Between Subtabs.",
            "C": "Edit the record and then drag and drop the standard field to the desired subtab.",
            "D": "Edit the field setup and then change the value of the Subtab field under the Display subtab"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "How do you identify if a NetSuite record has scripts/workflows applied to it? ",
        "OPTIONS": {
            "A": "Navigate to the Scripted Records page.",
            "B": "View the record and look under the Customization tab.",
            "C": "Use the Script Debugger.",
            "D": "Customize the form and look under the Scripting tab."
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which statement is true about customer credit memos and inventory items?",
        "OPTIONS": {
            "A": "A stand-alone credit memo reduces inventory quantity.",
            "B": "A credit memo created from a return authorization has no impact on inventory, however, a stand-alone credit memo does impact inventory.",
            "C": "A credit memo created from a return authorization reduces inventory quantity.",
            "D": "A credit memo created from a return authorization impacts inventory, while a stand-alone credit memo does not impact inventory."
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which statement is true about Two-Factor Authentication?",
        "OPTIONS": {
            "A": "The user must enter a verification code that is sent to their email address every time they log in.",
            "B": "Two-Factor Authentication is required for highly privileged NetSuite roles (e.g., Sales Administrator). ",
            "C": "Users need separate Two-Factor Authentication setups for each account.",
            "D": "The duration of the trusted device can only be set to Per Session "
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "Which statement is true about portlets?",
        "OPTIONS": {
            "A": "Custom Search portlet content automatically updates to the most recent data.",
            "B": "The Trend Graph portlet can allow up to one Key Performance Indicator only.",
            "C": "The Available Reminders portlet is unlimited.",
            "D": "The List portlet can be expanded to full-screen view."
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "When enabled, which feature allows users to track multiple Key Performance Indicators (KPIs) with different date ranges?",
        "OPTIONS": {
            "A": "KPI Scorecards",
            "B": "KPI Meters",
            "C": "Dashboard and Reports",
            "D": "Key Performance Indicators"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "An AP Clerk needs to pay multiple vendors, but encounters an unexpected error after navigating to the Pay Bills page. The alternate solution is to use the Pay Single Vendor page, but this requires a great deal of time to pay the company's vendors. What is the appropriate NetSuite Case Severity Level the user should select when submitting a Support Case?",
        "OPTIONS": {
            "A": "C3 - How To / Non Urgent questions",
            "B": "C2 - Urgent",
            "C": "C4 - Enhancement / Non Tech Support",
            "D": "C1 - Critical / Business Down"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which transactions can be created from a Return Materials Authorization (RMA) using the Standard Return Authorization - Cash form",
        "OPTIONS": {
            "A": "Cash Sale",
            "B": "Item Fulfillment",
            "C": "Customer Refund",
            "D": "Cash Refund"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "Which structure will allow the tracking of consolidated financial reports by a legal entity?",
        "OPTIONS": {
            "A": "Classes",
            "B": "Locations",
            "C": "Subsidiaries",
            "D": "Departments"
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "Where does an Administrator turn on Custom Records?",
        "OPTIONS": {
            "A": "Users/Roles",
            "B": "Enable Features",
            "C": "Setup Customization",
            "D": "Company Preferences"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which feature requires a user to agree to the Mass Messaging Application Terms of Service",
        "OPTIONS": {
            "A": "Mail Merge",
            "B": "Capture Email Replies",
            "C": "Subscription Categories",
            "D": "Customer Relationship Manager"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which record types support the Multiple Currency feature? (Choose 2.)",
        "OPTIONS": {
            "A": "Vendor",
            "B": "Employees",
            "C": "Customer",
            "D": "Partners ",
            "E": "Competitors"
        },
        "ANSWER": [
            "A",
            "C"
        ]
    },
    {
        "Q": "Which feature allows users to manage inventory in various locations",
        "OPTIONS": {
            "A": "Locations",
            "B": "Inventory",
            "C": "Multi-Location Inventory",
            "D": "Advanced Inventory Management"
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "How can the impact of intercompany purchases and sales be offset?",
        "OPTIONS": {
            "A": "Post journals to an elimination subsidiary.",
            "B": "Ensure the subsidiaries have the same parent.",
            "C": "Exclude one of the subsidiaries when reporting.",
            "D": "Set the same base currency in both subsidiaries."
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "In a OneWorld account, which two steps are required to make items taxable? (choose 2)",
        "OPTIONS": {
            "A": "Assign a tax schedule on the item record.",
            "B": "Set the taxable flag on the Item to “Yes”.",
            "C": "Create tax schedules for groups of Items.",
            "D": "Add the Item to the appropriate tax schedule."
        },
        "ANSWER": [
            "A",
            "C"
        ]
    },
    {
        "Q": "Which statement is correct about renaming records/transactions?",
        "OPTIONS": {
            "A": "The navigational path to the record updates with the renaming.",
            "B": "Abbreviations for Transaction Names can only contain up to 10 alphanumeric and/or special characters.",
            "C": "Abbreviations for Account Type Names can be used to access the account when recording journal entries.",
            "D": "The renaming process applies to each language used within the system."
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which steps are needed to disable the Multi-Subsidiary Customer feature? (Choose 2.)",
        "OPTIONS": {
            "A": "Reverse or delete all transactions related to customers and their secondary subsidiaries.",
            "B": "Inactivate Customer records with multiple transactions on different subsidiaries.",
            "C": "Remove all secondary subsidiaries from Customer records.",
            "D": "Set only one primary subsidiary and one secondary subsidiary in the Customer record. "
        },
        "ANSWER": [
            "A",
            "C"
        ]
    },
    {
        "Q": "Which is considered the primary classification used to organize records in a NetSuite OneWorld account?",
        "OPTIONS": {
            "A": "Departments",
            "B": "Classes",
            "C": "Subsidiaries",
            "D": "Locations"
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "Which field type can be used to track Employee birthdays?",
        "OPTIONS": {
            "A": "Date",
            "B": "Date/Time",
            "C": "Time of Day",
            "D": "Record is Parent"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which statement is true about custom forms?",
        "OPTIONS": {
            "A": "Even if a custom form is stored with a record, a user cannot access the form if it is not enabled for their role.",
            "B": "If you set preferred forms without restricting them, employees can still change the form when entering records.",
            "C": "The Store Form with Record option is available for all custom entry and custom transaction forms.",
            "D": "Define preferred forms from Home > Set Preferences."
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which statement is correct regarding Custom Transactions?",
        "OPTIONS": {
            "A": "Custom Transaction Types can have auto-generated document numbers.",
            "B": "Custom Transaction Types cannot be imported via CSV.",
            "C": "Users can only create one custom form for each transaction type.",
            "D": "Custom Transaction Types cannot include Custom Transaction body fields."
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "What customization feature allows users with no scripting knowledge to modify standard NetSuite processes?",
        "OPTIONS": {
            "A": "SuiteBuilder",
            "B": "SuiteFlow",
            "C": "SuiteBundler",
            "D": "SuiteTalk"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Where can users set a Default Role upon logging into NetSuite?",
        "OPTIONS": {
            "A": "On the Employee record > Access tab, mark the Default checkbox next to the assigned role.",
            "B": "On the Choose Role page, mark the Default checkbox next to the assigned role.",
            "C": "On the Home page, click the star icon below the Oracle NetSuite logo.",
            "D": "On the Role record > Users tab, mark the Default checkbox next to the assigned user."
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Where do users access NetSuite Performance Details?",
        "OPTIONS": {
            "A": "Double-click the company logo.",
            "B": "Double-click the Oracle NetSuite logo.",
            "C": "Double-click the User Role dropdown menu.",
            "D": "Set up the Key Performance Indicators portlet."
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "While editing a cash sale, a user must refresh the record to see the latest email received from the customer. What must the user also do to see the email without losing unsaved data on the cash sale?",
        "OPTIONS": {
            "A": "Go to the Communication subtab and click Refresh on the Messages sublist.",
            "B": "Right-click the Refresh icon on the browser and click Soft Refresh.",
            "C": "Refresh the whole page.",
            "D": "Click the Receive Email Crosslink."
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Where in NetSuite can a user find the Show Internal IDs preference?",
        "OPTIONS": {
            "A": "Setup tab > Enable Features",
            "B": "Home > General Preferences",
            "C": "Home > Set Preferences",
            "D": "Setup tab > Accounting Preferences"
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "Which restrictions can apply to records on the Home > Set Preferences > Restrict View tab? (Choose 2.)",
        "OPTIONS": {
            "A": "Period",
            "B": "Segment",
            "C": "Location",
            "D": "Department"
        },
        "ANSWER": [
            "C",
            "D"
        ]
    },
    {
        "Q": "A user created a List of Items Sold Today report using a saved search. Which portlet allows the user to add this report to the Home dashboard?",
        "OPTIONS": {
            "A": "Custom Search",
            "B": "Report Snapshots",
            "C": "Quick Search",
            "D": "Custom List"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which Documents > Mail Merge > Bulk Merge option is available for users to create bulk communications?",
        "OPTIONS": {
            "A": "Event",
            "B": "Fax",
            "C": "CSV",
            "D": "Cases"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which statement is true about restricting files in the File Cabinet?",
        "OPTIONS": {
            "A": "To make files available to company users only, select the Company-Wide Usage box on the file record.",
            "B": "NetSuite allows users to restrict individual files.",
            "C": "The Available Without Login preference is selected by default.",
            "D": "If a parent folder's restriction changes after a subfolder is created, the subfolder inherits the new restriction."
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Where should a user go to set a default expiration (in days) for Estimate records? ",
        "OPTIONS": {
            "A": "Sales Preferences",
            "B": "The Estimate record",
            "C": "The Customer record",
            "D": "Accounting Preferences"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which statements are true when converting Leads? (Choose 2.)",
        "OPTIONS": {
            "A": "A Lead record can be converted to the Customer stage without creating a transaction.",
            "B": "Leads converted to Customers can never be converted back to Leads.",
            "C": "When an Opportunity is created, the Lead record is assigned the default status set under Sales Preferences.",
            "D": "Leads can be converted to the Customer stage through a Relationships type CSV import."
        },
        "ANSWER": [
            "A",
            "C"
        ]
    },
    {
        "Q": "What is the customer status after creating an Estimate for a Lead record?",
        "OPTIONS": {
            "A": "Lead",
            "B": "Prospect",
            "C": "Customer",
            "D": "Contact"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which options can be set by users under Setup > Sales > Sales Preferences > Forecasts? (Choose 2.)",
        "OPTIONS": {
            "A": "Calculate Forecasts as Weighted",
            "B": "Advanced Forecasting",
            "C": "Use Opportunities in Forecast",
            "D": "Allow Setting Probability in Forecast Editor",
            "E": "Allow Override of Quotas in Forecast Editor"
        },
        "ANSWER": [
            "A",
            "D"
        ]
    },
    {
        "Q": "Where can users set subsidiary-level support preferences?",
        "OPTIONS": {
            "A": "Case Profile",
            "B": "Setup > Company > General Preferences",
            "C": "Setup > Support > Support Preferences",
            "D": "Subsidiary record"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "Which role or roles can edit locked cases?",
        "OPTIONS": {
            "A": "Administrator only",
            "B": "Administrator and Support Administrator",
            "C": "Administrator, Support Administrator, and Support Manager",
            "D": "Administrator and roles with Full access on Cases"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "What is the purpose of selecting Unsubscribed to Marketing by Default, under Marketing Preferences?",
        "OPTIONS": {
            "A": "To enable the Global Subscription Status field on the Customer record.",
            "B": "To set the Global Subscription Status to Soft Opt-out once a new Customer record is created.",
            "C": "Existing customers are updated from Soft Opt-in to Unsubscribed.",
            "D": "To enable the Campaign Subscription Center link under Home > Dashboard > Settings portlet. "
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Using the Standard Sales Order Form, what transaction is created when billing a Sales Order that has a Payment Method selected?",
        "OPTIONS": {
            "A": "Progress Invoice",
            "B": "Cash Sale",
            "C": "Customer Payment",
            "D": "Invoice"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which preference allows users to enter a quantity higher than the quantity committed for an item on an Item Fulfillment form?",
        "OPTIONS": {
            "A": "Allow Overage on Item Fulfillments",
            "B": "Invoice in Advance of Fulfillment",
            "C": "Show Unfulfilled Items on Invoices",
            "D": "Allow Overage on Item Commitments"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which three Customer Payment Methods are supported in NetSuite? (Choose 3.)",
        "OPTIONS": {
            "A": "ACH Processing",
            "B": "Electronic Funds Transfer",
            "C": "PayPal Express for Web Stores",
            "D": "Credit Card Processing for Sales Orders"
        },
        "ANSWER": [
            "B",
            "C",
            "D"
        ]
    },
    {
        "Q": "Which transaction is created when clicking Refund in a Return Materials Authorization (RMA) record?",
        "OPTIONS": {
            "A": "Bill Credit",
            "B": "Inventory Adjustment",
            "C": "Customer Refund",
            "D": "Cash Refund"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "Which statement is true about Customer Return Authorization records?",
        "OPTIONS": {
            "A": "If created with a Credit Form, the record generates a Customer Deposit.",
            "B": "If created with a Credit Form, the record generates a Credit Memo.",
            "C": "If created with a Cash Form, the record generates a Credit Memo.",
            "D": "If created with a Cash Form, the record generates a Cash Sale. "
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which item types may be used to cluster Item records and group them into one unit? (Choose 2.)",
        "OPTIONS": {
            "A": "Service Items",
            "B": "Assembly Items",
            "C": "Kit/Package Items",
            "D": "Lot-Numbered Items",
            "E": "Non-inventory For Resale"
        },
        "ANSWER": [
            "B",
            "C"
        ]
    },
    {
        "Q": "Which setting changes the quantity and value of an inventory item without entering a purchase order?",
        "OPTIONS": {
            "A": "Order Items",
            "B": "Adjust Inventory",
            "C": "Reallocate Items",
            "D": "Review Negative Inventory"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which feature enables users to define various units used to stock, purchase, and sell inventory items and to track non-monetary accounts?",
        "OPTIONS": {
            "A": "Statistical Accounts",
            "B": "Multiple Units of Measure",
            "C": "Lot Tracking",
            "D": "Bar Coding and Item Labels"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which statement is true regarding Price Levels?",
        "OPTIONS": {
            "A": "When the Multiple Prices feature is enabled, users can create up to 1,000 Price Levels.",
            "B": "Users can only enter a discount percentage on Price Levels.",
            "C": "Users are not allowed to inactivate a Price Level when it has a discount/mark-up percentage.",
            "D": "Price Levels cannot have the same discount/mark-up percentage."
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which accounting preference allows invoices to include memos on Time records when the Bill Costs for Customers feature is enabled?",
        "OPTIONS": {
            "A": "Copy Source Memos to Invoices",
            "B": "Copy Time Memos to Invoices",
            "C": "Copy All Memos to Invoices",
            "D": "Copy Expense Memos to Invoices"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which statement is true regarding the Standard Purchase Order Approval Routing process?",
        "OPTIONS": {
            "A": "A Purchase Request is automatically routed to the Supervisor if the Purchase Approver is unable to approve the transaction within 24 hours.",
            "B": "If the Purchase Limit of the employee is set to zero, then all Purchase Requests are automatically approved, even if a Purchase Approver is set.",
            "C": "A rejected Purchase Request can still be edited and resubmitted for approval.",
            "D": "A Purchase Request can no longer be edited once it has been approved."
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "At which status does a Vendor Bill affect Accounts Payable?",
        "OPTIONS": {
            "A": "Pending Approval",
            "B": "Open",
            "C": "Partially Billed",
            "D": "Unpaid"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which statement is true about NetSuite's ecommerce functionality?",
        "OPTIONS": {
            "A": "HTML skills are required to create a website.",
            "B": "Hosted HTML pages require external hosting sites.",
            "C": "Shopping cart automatically saves sales orders in the system.",
            "D": "Integration with the accounting module requires WSDK codes."
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "Which value can users enter in Global Search to include inactive records?",
        "OPTIONS": {
            "A": "cu:-abc",
            "B": "cu:abc",
            "C": "cu:+abc",
            "D": "cu:abc+"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "When added to the Criteria subtab of a Transaction search, which filter displays primary line data rows only?",
        "OPTIONS": {
            "A": "Main Line = yes",
            "B": "Item on Any Line = specify item",
            "C": "Name = name of the item",
            "D": "Main Line = any"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which statement is true about portlets?",
        "OPTIONS": {
            "A": "Portlet controls are shown by default but can be hidden by the user.",
            "B": "Portlets with content that is calculated from current data includes an Export function.",
            "C": "All portlets can be expanded to full-screen view.",
            "D": "A pop-up may display, suggesting that portlets can be minimized to speed up dashboard loading time."
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "What are three attributes of a custom report? (Choose 3)",
        "OPTIONS": {
            "A": "Are available for Web Query",
            "B": "Provide point-in-time analysis",
            "C": "Are the basis for custom KPIs",
            "D": "Can have critical data highlighted",
            "E": "Are the basis for custom report snapshots"
        },
        "ANSWER": [
            "A",
            "B",
            "E"
        ]
    },
    {
        "Q": "What are three unique features to Financial Report Builder? (Choose 3)",
        "OPTIONS": {
            "A": "Sections may have specific sorting.",
            "B": "Sections may have highlighted results.",
            "C": "Sections may contain subsidiary context.",
            "D": "Sections may be shared between financial reports.",
            "E": "Sections are defined by additional sorts, override layout sorts."
        },
        "ANSWER": [
            "A",
            "B",
            "D"
        ]
    },
    {
        "Q": "Which two statements are true about the functionality in Report Builder? (choose 2)",
        "OPTIONS": {
            "A": "Users can add formula fields to columns.",
            "B": "User can export reports as an Excel Web Query.",
            "C": "Users can add custom HTML into column headers.",
            "D": "Users can customize data through Edit Layout Page."
        },
        "ANSWER": [
            "A",
            "B"
        ]
    },
    {
        "Q": "Which use case requires the use of a report rather than a search?",
        "OPTIONS": {
            "A": "Key Performance Indicator",
            "B": "Dashboard Reminder",
            "C": "KPI Scorecard",
            "D": "Web Query enabled spreadsheet"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "Which statement is true about Mass Updates?",
        "OPTIONS": {
            "A": "A Mass Update definition must be saved before users can click Perform Update.",
            "B": "The first step to perform a Mass Update is to define new values that will be reflected on records.",
            "C": "On the Mass Update Preview Results page, users can exclude individual records.",
            "D": "Saved Mass Updates can be found on the list of Saved Searches."
        },
        "ANSWER": [
            "C"
        ]
    },
    {
        "Q": "Which resources under the Support tab can a user access to submit a case?",
        "OPTIONS": {
            "A": "NetSuite Administrator Group",
            "B": "NetSuite Account Center",
            "C": "NetSuite Support Aid",
            "D": "NetSuite Assistant"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which is a channel for contacting NetSuite Customer Support?",
        "OPTIONS": {
            "A": "Submit a Support Ticket using the Employee Center role.",
            "B": "Start a Live Chat conversation at the NetSuite Visitor home page.",
            "C": "Email a NetSuite Customer Support representative directly.",
            "D": "Submit an Online Case via SuiteAnswers."
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "What can users find in SuiteAnswers, the NetSuite self-service support site?",
        "OPTIONS": {
            "A": "New Release Notes",
            "B": "User Account Provisioning details",
            "C": "End user license agreement",
            "D": "The user account's File Cabinet usage"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "Which functionality is disabled in the Release Preview account?",
        "OPTIONS": {
            "A": "Payroll",
            "B": "Email Campaigns",
            "C": "Two-Factor Authentication",
            "D": "Memorized Transactions"
        },
        "ANSWER": [
            "A"
        ]
    },
    {
        "Q": "'Don and Mark both have the Consultant role.The role has the Create permission for Opportunities.Under the Global Permissions subtab of his Employee record, Don is provisioned Edit permission for Opportunities.Which statement is true?'",
        "OPTIONS": {
            "A": "They can both edit Opportunity records.",
            "B": "Mark can create Opportunity records while Don can edit and create Opportunity records.",
            "C": "Don can create Opportunity records while Mark can edit and create Opportunity records.",
            "D": "Neither Don nor Mark can edit Opportunity records."
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "Which attribute cannot be modified when editing a custom role?",
        "OPTIONS": {
            "A": "Inactive",
            "B": "Center Type",
            "C": "Employee Restrictions",
            "D": "Two-Factor Authentication"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "What is a recommended practice when adding a user?",
        "OPTIONS": {
            "A": "Customize a separate role for each user.",
            "B": "Assign a custom role.",
            "C": "Assign a NetSuite standard role.",
            "D": "Use Global Permissions with standard roles"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "What is the first step an Admin should take after being notified that an employee will be terminated?",
        "OPTIONS": {
            "A": "Delete the Employee record.",
            "B": "Inactivate the Employee record.",
            "C": "Change the Employees password.",
            "D": "Remove System Access for Employee."
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "Which standard NetSuite role is set up with mandatory Two-Factor Authentication?",
        "OPTIONS": {
            "A": "CEO",
            "B": "Administrator",
            "C": "Issue Administrator",
            "D": "CFO"
        },
        "ANSWER": [
            "B"
        ]
    },
    {
        "Q": "When is a user asked to answer a security question before they can log in to NetSuite?",
        "OPTIONS": {
            "A": "When the user provides an incorrect password upon initial login.",
            "B": "If the user logs in using a role with two-factor authentication enabled.",
            "C": "When a user proactively changes their password.",
            "D": "If the user attempts to log in using a new computer."
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "What settings can users change by clicking Set Preferences from the Settings portlet?",
        "OPTIONS": {
            "A": "Enable Features",
            "B": "Company Preferences",
            "C": "Accounting Preferences",
            "D": "User Preferences"
        },
        "ANSWER": [
            "D"
        ]
    },
    {
        "Q": "Where can you find logged OLD and NEW GL Impact of some transaction?",
        "OPTIONS": {
            "A": "System notes",
            "B": "My Login Audit",
            "C": "Transaction Audit Trail",
            "D": "Transaction Numbering Audit Log"
        },
        "ANSWER": [
            "A"
        ]
    }
]
var index = 1;
var newArrResults = []
var total = 0;
questions.forEach(function (question) {
    // if (total < 17) {
    //     total++;
    //     return;
    // }
    var optionsDict = question.OPTIONS;
    console.log("optionsDict ORIGINAL" + "\n");
    console.log(JSON.stringify(optionsDict) + "\n");
    var answer_a = optionsDict.A;
    var answer_b = optionsDict.B;
    var answer_c = optionsDict.C;
    var answer_d = optionsDict.D;

    console.log(JSON.stringify(answer_a) + "\n");


    var arrCorrects = question.ANSWER;

    console.log("arrCorrects ORIGINAL: " + arrCorrects);


    var result = "";
    arrCorrects.forEach(function (letter) {
        if (letter == "A") {
            result += answer_a + "\n";
        } else if (letter == "B") {
            result += answer_b + "\n";
        } else if (letter == "C") {
            result += answer_c + "\n";
        } else if (letter == "D") {
            result += answer_d + "\n";
        }
    })
    console.log("RESULT:" + "\n" + result);

    var newDict = {
        "id": index,
        "question": question.Q,
        "options": [
            JSON.stringify({
                "a": answer_a,
                "b": answer_b,
                "c": answer_c,
                "d": answer_d
            })
        ],
        "answer": result,
        "score": 0,
        "status": ""
    }

    index++;
    newArrResults.push(newDict)
});

console.log("\n ==================================== \n");
console.log("\n       FINALLY:  \n");
console.log("\n ==================================== \n");


// console.log(newArrResults);
newArrResults.forEach((result) => console.log(result));