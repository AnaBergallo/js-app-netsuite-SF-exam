/* Created and coded by Abhilash Narayan * /
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "On which custom object can an Administrator disable system notes?",
            "options": [
                {
                    "a": "Field on a Custom Record",
                    "b": "Custom Record",
                    "c": "Custom Transaction Body Field",
                    "d": "Custom Entity Field"
                }
            ],
            "answer": "Custom Record.",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Which feature provides information about a specific field and can be accessed while ending or viewing a record? The Internal ID of the field can also be seen here.",
            "options": [
                {
                    "a": "Help Guide",
                    "b": "Help",
                    "c": "Field Description",
                    "d": "Field Level Help"
                }
            ],
            "answer": "Field Level Help.",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "When using the Global Search to find records, how can users display inactive records in the search results?",
            "options": [
                {
                    "a": "Re-activate the record so that it appears in the Global Search results set",
                    "b": "Change the Display Type on the record",
                    "c": "Prefix the search keyword with the correct record type (for example, “cu” for Customer).",
                    "d": "Enable the user preference Include Inactives In Global & Quick Search"
                }
            ],
            "answer": "Enable the user preference Include Inactives In Global & Quick Search.",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Which feature cannot be disabled once it is enabled?",
            "options": [
                {
                    "a": "Expense Allocation",
                    "b": "Advanced Revenue Management",
                    "c": "Vendor Prepayments",
                    "d": "Consolidated Payments"
                }
            ],
            "answer": "Consolidated Payments.",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "Which portlet shows a graphical representation of Key Performance Indicator (KPI) data?",
            "options": [
                {
                    "a": "Key Performance Indicators",
                    "b": "KPI Meter",
                    "c": "KPI Scorecard",
                    "d": "Trend Graphs"
                }
            ],
            "answer": "Trend Graphs.",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Where should additional restrictions be added to further refine the results of a Saved Search?",
            "options": [
                {
                    "a": "Available Filters",
                    "b": "Highlighting",
                    "c": "Criteria",
                    "d": "Results"
                }
            ],
            "answer": "Results.",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "Which criteria are required for a field to be available for Mass Update? (Choose two.)",
            "options": [
                {
                    "a": "For custom fields, the field must not be stored and must have a sourcing relationship",
                    "b": "For standard fields, the field must have dependencies on other fields.",
                    "c": "The field must be displayed on the preferred form for the record type being updated",
                    "d": "The field must support inline editing."
                }
            ],
            "answer": "The field must be displayed on the preferred form for the record type being updated." +
                "The field must support inline editing.",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "Which Select All checkbox under the Audience subtab defaults to checked when a Saved Search is set to Public?",
            "options": [
                {
                    "a": "Roles",
                    "b": "Employees",
                    "c": "Partners",
                    "d": "Subsidiaries"
                }
            ],
            "answer": "Roles.",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "Which statements describe the behavior for assigning territories to cases? (Choose two.)",
            "options": [
                {
                    "a": "Setting the Default Round-Robin territory to Inactive marks unmatched cases as Unassigned.",
                    "b": "The Default Round-Robin territory always has last priority.",
                    "c": "Re-assigning existing cases to case territories is not allowed.",
                    "d": "NetSuite assigns cases to the best match after reviewing all case territories."
                }
            ],
            "answer": "Setting the Default Round-Robin territory to Inactive marks unmatched cases as Unassigned." +
                "NetSuite assigns cases to the best match after reviewing all case territories.",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which statement is true about NetSuite sessions?",
            "options": [
                {
                    "a": "Administrators can configure the Idle Session Timeout per user, on the user Employee record",
                    "b": "The absolute NetSuite user interface session timeout is 180 minutes.",
                    "c": "A warning with a 180-second countdown shows before an idle session timeout occurs.",
                    "d": "Due to session synchronization, logging out of one tab ends the session for all other tabs in the same account"
                }
            ],
            "answer": "Due to session synchronization, logging out of one tab ends the session for all other tabs in the same account.",
            "score": 0,
            "status": ""
        },
        {
            "id": 11,
            "question": "A user renamed the Customer entity record to Client in the Rename Records/Transactions Page. After navigating to Lists > Relationships, the user still sees Customer as the name of the record instead of Client. Why is this the case?",
            "options": [
                {
                    "a": "The user created a custom Center tab named Client under Lists > Relationships. Name changes are applied to standard NetSuite element names, but not to customized elements.",
                    "b": "The user renamed the Customer to Client in the English US language, but is currently using English UK as the language under Home > Set Preferences > General > Localization > Language",
                    "c": "The user must have at least a Full/Edit level permission to Rename Records/Transactions in order for changes to save.",
                    "d": "The user is logged into another role that uses the classic Center tab. Since renaming records or transactions is a user preference, the name change does not apply to that role."
                }
            ],
            "answer": "The user created a custom Center tab named Client under Lists > Relationships. Name changes are applied to standard NetSuite element names, but not to customized elements.",
            "score": 0,
            "status": ""
        },
        {
            "id": 12,
            "question": "Which portlet displays summary data from reports or Saved Searches for selected date ranges, with options to show comparisons between date ranges and to highlight results not meeting defined thresholds?",
            "options": [
                {
                    "a": "Reports Snapshot",
                    "b": "Key Performance Indicators",
                    "c": "Account Reconciliation Summary",
                    "d": "SMT Links"
                }
            ],
            "answer": "Key Performance Indicators.",
            "score": 0,
            "status": ""
        },
        {
            "id": 13,
            "question": "What Subscription Status should the Administrator select so that customers receive email campaigns?",
            "options": [
                {
                    "a": "Hard Opt-in",
                    "b": "Soft Opt-in",
                    "c": "Hard Subscribe",
                    "d": "Subscribe"
                }
            ],
            "answer": "Hard Opt-in.",
            "score": 0,
            "status": ""
        },
        {
            "id": 14,
            "question": "Which statement is true about access levels for NetSuite permissions?",
            "options": [
                {
                    "a": "The Create access level allows editing records.",
                    "b": "The Edit access level does not allow deleting records.",
                    "c": "The Partial access level allows editing but not creating records.",
                    "d": "The View access level does not allow printing records."
                }
            ],
            "answer": "The Edit access level does not allow deleting records.",
            "score": 0,
            "status": ""
        },
        {
            "id": 15,
            "question": "Which transaction will have a GL Impact on Accounts Payable?",
            "options": [
                {
                    "a": "Pending Bill Purchase Order",
                    "b": "Cancelled Bill",
                    "c": "Open Bill with Payment Hold",
                    "d": "Fully Billed Purchase Order"
                }
            ],
            "answer": "Open Bill with Payment Hold.",
            "score": 0,
            "status": ""
        },
        {
            "id": 16,
            "question": "Editing inventory items inline is not functioning in Lists > Accounting > Items. What could be causing the problem?",
            "options": [
                {
                    "a": "The user needs to select an Item Type before enabling Inline Editing.",
                    "b": "The Allow Inline Editing for Inventory Items preference is not checked.",
                    "c": "Inline Editing is not possible with inventory items."
                }
            ],
            "answer": "The Allow Inline Editing for Inventory Items preference is not checked.",
            "score": 0,
            "status": ""
        },
        {
            "id": 17,
            "question": "Which Source can automatically create Lead records?",
            "options": [
                {
                    "a": "Web Site",
                    "b": "Chat",
                    "c": "Campaigns",
                    "d": "Email"
                }
            ],
            "answer": "Campaigns.",
            "score": 0,
            "status": ""
        },
        {
            "id": 18,
            "question": "Which statement is true about using Quick Accept in Event records?",
            "options": [
                {
                    "a": "Quick Accept can be performed through the Calendar portlet.",
                    "b": "Enable the Quick Accept preference under Setup > Activities > Calendar Preferences.",
                    "c": "The Event record should be in Edit mode to perform Quick Accept.",
                    "d": "The Quick Accept button provides users an option to mark events as Tentative or Accepted."
                }
            ],
            "answer": "Quick Accept can be performed through the Calendar portlet.",
            "score": 0,
            "status": ""
        },
        {
            "id": 19,
            "question": "What kind of custom field can Administrators create to add a column on the Item sublist of Sales Orders?",
            "options": [
                {
                    "a": "Custom Transaction Body field",
                    "b": "Custom Transaction Line fields",
                    "c": "Custom Item fields",
                    "d": "Custom Transaction Item options"
                }
            ],
            "answer": "Custom Transaction Line fields.",
            "score": 0,
            "status": ""
        },
        {
            "id": 20,
            "question": "Which user-level preference lets you choose whether to print records in PDF or HTML format?",
            "options": [
                {
                    "a": "Print Template",
                    "b": "PDF Language",
                    "c": "PDF Page Orientation",
                    "d": "Print Using HTML"
                }
            ],
            "answer": "Print Using HTML.",
            "score": 0,
            "status": ""
        },
        {
            "id": 21,
            "question": "When creating Item records, which item type does not require setting up an Income Account?",
            "options": [
                {
                    "a": "Assembly/Bill of Materials",
                    "b": "Item Group",
                    "c": "Kit/Package",
                    "d": "Kit/Package Items"
                }
            ],
            "answer": "Item Group.",
            "score": 0,
            "status": ""
        },
        {
            "id": 22,
            "question": "Which statement is true about Custom Roles?",
            "options": [
                {
                    "a": "It is not possible to change the Center Type of created Custom Roles.",
                    "b": "Grant employees access from the Users subtab of a Custom Role record.",
                    "c": "Custom Roles can be created through CSV Import.",
                    "d": "It is not possible to make copies of a Custom Role."
                }
            ],
            "answer": "It is not possible to change the Center Type of created Custom Roles.",
            "score": 0,
            "status": ""
        },
        {
            "id": 23,
            "question": "Which New Release portlet resource allows users to watch presentations and demonstrations on new features and enhancements in Suite Answers?",
            "options": [
                {
                    "a": "Training Resources",
                    "b": "Sneak Peeks",
                    "c": "Release Notes",
                    "d": "Release Preview Test Plan"
                }
            ],
            "answer": "Training Resources.",
            "score": 0,
            "status": ""
        },
        {
            "id": 24,
            "question": "When creating a new Employee record, a user is unable to change the value in the Job Title field. What could be the cause?",
            "options": [
                {
                    "a": "Field Sourcing is not set.",
                    "b": "Store Value is unchecked.",
                    "c": "The field is set to Inactive.",
                    "d": "Field Display Type is set to Inline on the custom form."
                }
            ],
            "answer": "The field is set to Inactive.",
            "score": 0,
            "status": ""
        },
        {
            "id": 25,
            "question": "Which feature separates the Shipping and the Billing processes in NetSuite?",
            "options": [
                {
                    "a": "Advanced Accounting",
                    "b": "Advanced Shipping Integration",
                    "c": "Advanced Billing",
                    "d": "Advanced Shipping"
                }
            ],
            "answer": "Advanced Billing.",
            "score": 0,
            "status": ""
        },
        {
            "id": 26,
            "question": "What is the max time between password changes? (days)",
            "options": [
                {
                    "a": "60",
                    "b": "120",
                    "c": "30",
                    "d": "360"
                }
            ],
            "answer": "360.",
            "score": 0,
            "status": ""
        },
        {
            "id": 27,
            "question": "An Administrator would like to track changes to the item quantity on a Sales Order. Which functionality would the Administrator use?",
            "options": [
                {
                    "a": "Line-Level Audit Trail for Transactions",
                    "b": "Transaction Audit Trail",
                    "c": "Transaction System Notes",
                    "d": "Track Changes Option"
                }
            ],
            "answer": "Track Changes Option.",
            "score": 0,
            "status": ""
        },
        {
            "id": 28,
            "question": "Which record is a non-posting transaction?",
            "options": [
                {
                    "a": "Return Receipts",
                    "b": "Credit Memo",
                    "c": "Sales Order",
                    "d": "Statement Charges"
                }
            ],
            "answer": "Sales Order.",
            "score": 0,
            "status": ""
        },
        {
            "id": 29,
            "question": "An Administrator renamed the Customer record type to Client and you would like to search for a customer named Acme Inc. Which keywords would you enter in a Global Search? (Choose two.)",
            "options": [
                {
                    "a": "'Acme%'",
                    "b": "cl: Acme Inc",
                    "c": "Acme Inc",
                    "d": "cu: Acme Inc"
                }
            ],
            "answer": "Acme% .cu: Acme Inc.",
            "score": 0,
            "status": ""
        },
        {
            "id": 30,
            "question": "Which Subsidiary Restriction type limits a role's access to a selected subsidiary on their Employee record.",
            "options": [
                {
                    "a": "Employee Subsidiary",
                    "b": "All",
                    "c": "Subsidiary",
                    "d": "Selected"
                }
            ],
            "answer": "Selected.",
            "score": 0,
            "status": ""
        },
        {
            "id": 31,
            "question": "How can an Administrator access open case tickets submitted to NetSuite Support by another user?",
            "options": [
                {
                    "a": "Using the Administrator role, navigate to Lists > Support > Cases.",
                    "b": "In SuiteAnswers, below the Contact Support Online button, click the Open Cases link.",
                    "c": "Access the Help Center and search for Case Tickets.",
                    "d": "Click the NetSuite Account Center portlet link in the Support tab."
                }
            ],
            "answer": "In SuiteAnswers, below the Contact Support Online button, click the Open Cases link.",
            "score": 0,
            "status": ""
        },
        {
            "id": 32,
            "question": "Maya is using a custom role that has the Import CSV File permission. On the Import Options page of the CSV Import Assistant, Maya can only select Data Handling of Add. What is the reason for this?",
            "options": [
                {
                    "a": "The custom role has the Edit level permission for the record type she is importing.",
                    "b": "The custom role's permission level for Import CSV File is not set to Full.",
                    "c": "The custom role has the Create permission level for the record type she is importing.",
                    "d": "The custom role's permission level for Import CSV File is set to Create."
                }
            ],
            "answer": "The custom role has the Create permission level for the record type she is importing.",
            "score": 0,
            "status": ""
        },
        {
            "id": 33,
            "question": "A user is trying to view a standard report in NetSuite. The report has been loading for three minutes. The user suspects that the slowness is caused by using a recently installed browser. Which of the following actions will confirm that the performance issue is caused by the browser or not?",
            "options": [
                {
                    "a": "Use the Application Performance Management to improve performance.",
                    "b": "Run the same report in a different window while the original report is still running.",
                    "c": "Double-click the Oracle NetSuite logo and look at Browser Time.",
                    "d": "Log in to NetSuite using a different browser and check the report performance."
                }
            ],
            "answer": "Use the Application Performance Management to improve performance.",
            "score": 0,
            "status": ""
        },
        {
            "id": 34,
            "question": "Which feature allows customers to view an online transaction history, get quotes, and make payments within NetSuite?",
            "options": [
                {
                    "a": "Web Site",
                    "b": "Payment Center",
                    "c": "Customer Hub",
                    "d": "Customer Access"
                }
            ],
            "answer": "Customer Access.",
            "score": 0,
            "status": ""
        },
        {
            "id": 35,
            "question": "Which statement is true regarding the Create New menu in NetSuite?",
            "options": [
                {
                    "a": "Options in the Create New menu can be personalized through the Set Preferences page.",
                    "b": "The Create New menu includes links to create new transactions only.",
                    "c": "The Create New menu is visible only on the Home dashboard.",
                    "d": "Available options are limited by the role a user is logged in with."
                }
            ],
            "answer": "Options in the Create New menu can be personalized through the Set Preferences page.",
            "score": 0,
            "status": ""
        },
        {
            "id": 36,
            "question": "Where can a user add external URLs to appear on the Home dashboard?",
            "options": [
                {
                    "a": "External Links Portlet",
                    "b": "Bookmarks",
                    "c": "Shortcuts Portlet",
                    "d": "Personalize Dashboard"
                }
            ],
            "answer": "Shortcuts Portlet.",
            "score": 0,
            "status": ""
        },
        {
            "id": 37,
            "question": "Given the following settings: ." +
                " Customer Credit Limit Handling = Enforce Holds ." +
                " Customer Credit Limit Includes Orders = True ." +
                " How can you create Sales Orders for a Customer that has reached their Credit Limit?",
            "options": [
                {
                    "a": "Use the Standard Sales Order - Cash Sale form",
                    "b": "Use the Standard Sales Order - Invoice form",
                    "c": "Select a higher Order Priority for the Customer",
                    "d": "Select the Override Credit Limit on the Sales Order"
                }
            ],
            "answer": "Select the Override Credit Limit on the Sales Order.",
            "score": 0,
            "status": ""
        },
        {
            "id": 38,
            "question": "When setting up security questions, how many times can users dismiss the prompt before it becomes mandatory?",
            "options": [
                {
                    "a": "2",
                    "b": "3",
                    "c": "5",
                    "d": "6"
                }
            ],
            "answer": "5.",
            "score": 0,
            "status": ""
        },
        {
            "id": 39,
            "question": "Which feature enables users to create custom Classifications in NetSuite?",
            "options": [
                {
                    "a": "Custom Segments",
                    "b": "Custom Sections",
                    "c": "Custom Divisions",
                    "d": "Custom Classifications"
                }
            ],
            "answer": "Custom Segments.",
            "score": 0,
            "status": ""
        },
        {
            "id": 40,
            "question": "Which actions can users perform from the Settings portlet? (Choose two.)",
            "options": [
                {
                    "a": "Add Permissions",
                    "b": "Create a Custom Record",
                    "c": "Enable Features",
                    "d": "Personalize Dashboard"
                }
            ],
            "answer": "Personalize Dashboard.",
            "score": 0,
            "status": ""
        },
        {
            "id": 41,
            "question": "Which statement explains why an inactive classification still appears in Financial Reports?",
            "options": [
                {
                    "a": "The accounting preference Include Inactive Classifications is checked.",
                    "b": "Inactive classifications still appear to provide historical reporting and to avoid unbalanced totals.",
                    "c": "The Administrator customized the report using the Financial Report Builder to include the inactive classification.",
                    "d": "Inactive classifications show, but with the identifier (Inactive)."
                }
            ],
            "answer": "The accounting preference Include Inactive Classifications is checked.",
            "score": 0,
            "status": ""
        },
        {
            "id": 42,
            "question": "Which feature enables users to invoice customers for time, items, and reimbursable expenses incurred",
            "options": [
                {
                    "a": "Bill Costs To Customers",
                    "b": "Charge-Based Billing",
                    "c": "Expense Billing",
                    "d": "Billing Operations"
                }
            ],
            "answer": "Bill Costs To Customers.",
            "score": 0,
            "status": ""
        },
        {
            "id": 43,
            "question": "When creating a Payment Method, what Type applies to payments that occur outside of NetSuite (for example, cash payments)?",
            "options": [
                {
                    "a": "External Checkout",
                    "b": "Offline",
                    "c": "Pay By Reference",
                    "d": "General Token"
                }
            ],
            "answer": "Offline.",
            "score": 0,
            "status": ""
        },
        {
            "id": 44,
            "question": "What Subsidiary type is used to eliminate revenue and expenses at the consolidated level, removing the effect of transactions between subsidiaries?",
            "options": [
                {
                    "a": "Consolidation Subsidiary",
                    "b": "Elimination Subsidiary",
                    "c": "Parent Subsidiary ",
                    "d": "Child Subsidiary "
                }
            ],
            "answer": "Elimination Subsidiary.",
            "score": 0,
            "status": ""
        },
        {
            "id": 45,
            "question": "Which action can a Sales Rep perform in the Forecast Editor? ",
            "options": [
                {
                    "a": "Inactivate transactions to exclude in the Forecast Report.",
                    "b": "Edit all transactions that make up their sales forecast. ",
                    "c": "Adjust the probability and status of opportunities in the forecast. ",
                    "d": "Edit their quota to override their sales forecast. "
                }
            ],
            "answer": "Adjust the probability and status of opportunities in the forecast.",
            "score": 0,
            "status": ""
        },
        {
            "id": 46,
            "question": "Which two can users rename on the Rename Records/Transactions page? (Choose two.) ",
            "options": [
                {
                    "a": "Entities",
                    "b": "Account types",
                    "c": "Report types",
                    "d": "Units of Measure"
                }
            ],
            "answer": "Entities.Account types.",
            "score": 0,
            "status": ""
        },
        {
            "id": 47,
            "question": "Which URL accesses the release Preview Environment?",
            "options": [
                {
                    "a": "https://system.beta.netsuite.com",
                    "b": "https://release-preview.netsuite.com",
                    "c": "https://beta.netsuite.com",
                    "d": "https://system.netsuite.com"
                }
            ],
            "answer": "https: //system.netsuite.com.",
            "score": 0,
            "status": ""
        },
        {
            "id": 48,
            "question": "How can a standard field be moved to a different subtab on a custom form?",
            "options": [
                {
                    "a": "Go to Customization > Forms > Subtabs, then drag and drop the subtabs.",
                    "b": "Customize a form and click Move Elements Between Subtabs.",
                    "c": "Edit the record and then drag and drop the standard field to the desired subtab.",
                    "d": "Edit the field setup and then change the value of the Subtab field under the Display subtab"
                }
            ],
            "answer": "Customize a form and click Move Elements Between Subtabs.",
            "score": 0,
            "status": ""
        },
        {
            "id": 49,
            "question": "How do you identify if a NetSuite record has scripts/workflows applied to it? ",
            "options": [
                {
                    "a": "Navigate to the Scripted Records page.",
                    "b": "View the record and look under the Customization tab.",
                    "c": "Use the Script Debugger.",
                    "d": "Customize the form and look under the Scripting tab."
                }
            ],
            "answer": "Navigate to the Scripted Records page.",
            "score": 0,
            "status": ""
        },
        {
            "id": 50,
            "question": "Which statement is true about customer credit memos and inventory items?",
            "options": [
                {
                    "a": "A stand-alone credit memo reduces inventory quantity.",
                    "b": "A credit memo created from a return authorization has no impact on inventory, however, a stand-alone credit memo does impact inventory.",
                    "c": "A credit memo created from a return authorization reduces inventory quantity.",
                    "d": "A credit memo created from a return authorization impacts inventory, while a stand-alone credit memo does not impact inventory."
                }
            ],
            "answer": "A credit memo created from a return authorization has no impact on inventory, however, a stand-alone credit memo does impact inventory.",
            "score": 0,
            "status": ""
        },
        {
            "id": 51,
            "question": "Which statement is true about Two-Factor Authentication?",
            "options": [
                {
                    "a": "The user must enter a verification code that is sent to their email address every time they log in.",
                    "b": "Two-Factor Authentication is required for highly privileged NetSuite roles (e.g., Sales Administrator). ",
                    "c": "Users need separate Two-Factor Authentication setups for each account.",
                    "d": "The duration of the trusted device can only be set to Per Session "
                }
            ],
            "answer": "The duration of the trusted device can only be set to Per Session .",
            "score": 0,
            "status": ""
        },
        {
            "id": 52,
            "question": "Which statement is true about portlets?",
            "options": [
                {
                    "a": "Custom Search portlet content automatically updates to the most recent data.",
                    "b": "The Trend Graph portlet can allow up to one Key Performance Indicator only.",
                    "c": "The Available Reminders portlet is unlimited.",
                    "d": "The List portlet can be expanded to full-screen view."
                }
            ],
            "answer": "The List portlet can be expanded to full-screen view.",
            "score": 0,
            "status": ""
        },
        {
            "id": 53,
            "question": "When enabled, which feature allows users to track multiple Key Performance Indicators (KPIs) with different date ranges?",
            "options": [
                {
                    "a": "KPI Scorecards",
                    "b": "KPI Meters",
                    "c": "Dashboard and Reports",
                    "d": "Key Performance Indicators"
                }
            ],
            "answer": "KPI Scorecards.",
            "score": 0,
            "status": ""
        },
        {
            "id": 54,
            "question": "An AP Clerk needs to pay multiple vendors, but encounters an unexpected error after navigating to the Pay Bills page. The alternate solution is to use the Pay Single Vendor page, but this requires a great deal of time to pay the company's vendors. What is the appropriate NetSuite Case Severity Level the user should select when submitting a Support Case?",
            "options": [
                {
                    "a": "C3 - How To / Non Urgent questions",
                    "b": "C2 - Urgent",
                    "c": "C4 - Enhancement / Non Tech Support",
                    "d": "C1 - Critical / Business Down"
                }
            ],
            "answer": "C2 - Urgent.",
            "score": 0,
            "status": ""
        },
        {
            "id": 55,
            "question": "Which transactions can be created from a Return Materials Authorization (RMA) using the Standard Return Authorization - Cash form",
            "options": [
                {
                    "a": "Cash Sale",
                    "b": "Item Fulfillment",
                    "c": "Customer Refund",
                    "d": "Cash Refund"
                }
            ],
            "answer": "Cash Refund.",
            "score": 0,
            "status": ""
        },
        {
            "id": 56,
            "question": "Which structure will allow the tracking of consolidated financial reports by a legal entity?",
            "options": [
                {
                    "a": "Classes",
                    "b": "Locations",
                    "c": "Subsidiaries",
                    "d": "Departments"
                }
            ],
            "answer": "Subsidiaries.",
            "score": 0,
            "status": ""
        },
        {
            "id": 57,
            "question": "Where does an Administrator turn on Custom Records?",
            "options": [
                {
                    "a": "Users/Roles",
                    "b": "Enable Features",
                    "c": "Setup Customization",
                    "d": "Company Preferences"
                }
            ],
            "answer": "Enable Features.",
            "score": 0,
            "status": ""
        },
        {
            "id": 58,
            "question": "Which feature requires a user to agree to the Mass Messaging Application Terms of Service",
            "options": [
                {
                    "a": "Mail Merge",
                    "b": "Capture Email Replies",
                    "c": "Subscription Categories",
                    "d": "Customer Relationship Manager"
                }
            ],
            "answer": "Mail Merge.",
            "score": 0,
            "status": ""
        },
        {
            "id": 59,
            "question": "Which record types support the Multiple Currency feature? (Choose 2.)",
            "options": [
                {
                    "a": "Vendor",
                    "b": "Employees",
                    "c": "Customer",
                    "d": "Partners "
                }
            ],
            "answer": "Vendor.Customer.",
            "score": 0,
            "status": ""
        },
        {
            "id": 60,
            "question": "Which feature allows users to manage inventory in various locations",
            "options": [
                {
                    "a": "Locations",
                    "b": "Inventory",
                    "c": "Multi-Location Inventory",
                    "d": "Advanced Inventory Management"
                }
            ],
            "answer": "Multi-Location Inventory.",
            "score": 0,
            "status": ""
        },
        {
            "id": 61,
            "question": "How can the impact of intercompany purchases and sales be offset?",
            "options": [
                {
                    "a": "Post journals to an elimination subsidiary.",
                    "b": "Ensure the subsidiaries have the same parent.",
                    "c": "Exclude one of the subsidiaries when reporting.",
                    "d": "Set the same base currency in both subsidiaries."
                }
            ],
            "answer": "Post journals to an elimination subsidiary.",
            "score": 0,
            "status": ""
        },
        {
            "id": 62,
            "question": "In a OneWorld account, which two steps are required to make items taxable? (choose 2)",
            "options": [
                {
                    "a": "Assign a tax schedule on the item record.",
                    "b": "Set the taxable flag on the Item to “Yes”.",
                    "c": "Create tax schedules for groups of Items.",
                    "d": "Add the Item to the appropriate tax schedule."
                }
            ],
            "answer": "Assign a tax schedule on the item record." +
                "Create tax schedules for groups of Items.",
            "score": 0,
            "status": ""
        },
        {
            "id": 63,
            "question": "Which statement is correct about renaming records/transactions?",
            "options": [
                {
                    "a": "The navigational path to the record updates with the renaming.",
                    "b": "Abbreviations for Transaction Names can only contain up to 10 alphanumeric and/or special characters.",
                    "c": "Abbreviations for Account Type Names can be used to access the account when recording journal entries.",
                    "d": "The renaming process applies to each language used within the system."
                }
            ],
            "answer": "The navigational path to the record updates with the renaming.",
            "score": 0,
            "status": ""
        },
        {
            "id": 64,
            "question": "Which steps are needed to disable the Multi-Subsidiary Customer feature? (Choose 2.)",
            "options": [
                {
                    "a": "Reverse or delete all transactions related to customers and their secondary subsidiaries.",
                    "b": "Inactivate Customer records with multiple transactions on different subsidiaries.",
                    "c": "Remove all secondary subsidiaries from Customer records.",
                    "d": "Set only one primary subsidiary and one secondary subsidiary in the Customer record. "
                }
            ],
            "answer": "Reverse or delete all transactions related to customers and their secondary subsidiaries." +
                "Remove all secondary subsidiaries from Customer records.",
            "score": 0,
            "status": ""
        },
        {
            "id": 65,
            "question": "Which is considered the primary classification used to organize records in a NetSuite OneWorld account?",
            "options": [
                {
                    "a": "Departments",
                    "b": "Classes",
                    "c": "Subsidiaries",
                    "d": "Locations"
                }
            ],
            "answer": "Subsidiaries.",
            "score": 0,
            "status": ""
        },
        {
            "id": 66,
            "question": "Which field type can be used to track Employee birthdays?",
            "options": [
                {
                    "a": "Date",
                    "b": "Date/Time",
                    "c": "Time of Day",
                    "d": "Record is Parent"
                }
            ],
            "answer": "Date.",
            "score": 0,
            "status": ""
        },
        {
            "id": 67,
            "question": "Which statement is true about custom forms?",
            "options": [
                {
                    "a": "Even if a custom form is stored with a record, a user cannot access the form if it is not enabled for their role.",
                    "b": "If you set preferred forms without restricting them, employees can still change the form when entering records.",
                    "c": "The Store Form with Record option is available for all custom entry and custom transaction forms.",
                    "d": "Define preferred forms from Home > Set Preferences."
                }
            ],
            "answer": "If you set preferred forms without restricting them, employees can still change the form when entering records.",
            "score": 0,
            "status": ""
        },
        {
            "id": 68,
            "question": "Which statement is correct regarding Custom Transactions?",
            "options": [
                {
                    "a": "Custom Transaction Types can have auto-generated document numbers.",
                    "b": "Custom Transaction Types cannot be imported via CSV.",
                    "c": "Users can only create one custom form for each transaction type.",
                    "d": "Custom Transaction Types cannot include Custom Transaction body fields."
                }
            ],
            "answer": "Custom Transaction Types can have auto-generated document numbers.",
            "score": 0,
            "status": ""
        },
        {
            "id": 69,
            "question": "What customization feature allows users with no scripting knowledge to modify standard NetSuite processes?",
            "options": [
                {
                    "a": "SuiteBuilder",
                    "b": "SuiteFlow",
                    "c": "SuiteBundler",
                    "d": "SuiteTalk"
                }
            ],
            "answer": "SuiteFlow.",
            "score": 0,
            "status": ""
        },
        {
            "id": 70,
            "question": "Where can users set a Default Role upon logging into NetSuite?",
            "options": [
                {
                    "a": "On the Employee record > Access tab, mark the Default checkbox next to the assigned role.",
                    "b": "On the Choose Role page, mark the Default checkbox next to the assigned role.",
                    "c": "On the Home page, click the star icon below the Oracle NetSuite logo.",
                    "d": "On the Role record > Users tab, mark the Default checkbox next to the assigned user."
                }
            ],
            "answer": "On the Choose Role page, mark the Default checkbox next to the assigned role.",
            "score": 0,
            "status": ""
        },
        {
            "id": 71,
            "question": "Where do users access NetSuite Performance Details?",
            "options": [
                {
                    "a": "Double-click the company logo.",
                    "b": "Double-click the Oracle NetSuite logo.",
                    "c": "Double-click the User Role dropdown menu.",
                    "d": "Set up the Key Performance Indicators portlet."
                }
            ],
            "answer": "Double-click the Oracle NetSuite logo.",
            "score": 0,
            "status": ""
        },
        {
            "id": 72,
            "question": "While editing a cash sale, a user must refresh the record to see the latest email received from the customer. What must the user also do to see the email without losing unsaved data on the cash sale?",
            "options": [
                {
                    "a": "Go to the Communication subtab and click Refresh on the Messages sublist.",
                    "b": "Right-click the Refresh icon on the browser and click Soft Refresh.",
                    "c": "Refresh the whole page.",
                    "d": "Click the Receive Email Crosslink."
                }
            ],
            "answer": "Go to the Communication subtab and click Refresh on the Messages sublist.",
            "score": 0,
            "status": ""
        },
        {
            "id": 73,
            "question": "Where in NetSuite can a user find the Show Internal IDs preference?",
            "options": [
                {
                    "a": "Setup tab > Enable Features",
                    "b": "Home > General Preferences",
                    "c": "Home > Set Preferences",
                    "d": "Setup tab > Accounting Preferences"
                }
            ],
            "answer": "Home > Set Preferences.",
            "score": 0,
            "status": ""
        },
        {
            "id": 74,
            "question": "Which restrictions can apply to records on the Home > Set Preferences > Restrict View tab? (Choose 2.)",
            "options": [
                {
                    "a": "Period",
                    "b": "Segment",
                    "c": "Location",
                    "d": "Department"
                }
            ],
            "answer": "Location.Department.",
            "score": 0,
            "status": ""
        },
        {
            "id": 75,
            "question": "A user created a List of Items Sold Today report using a saved search. Which portlet allows the user to add this report to the Home dashboard?",
            "options": [
                {
                    "a": "Custom Search",
                    "b": "Report Snapshots",
                    "c": "Quick Search",
                    "d": "Custom List"
                }
            ],
            "answer": "Custom Search.",
            "score": 0,
            "status": ""
        },
        {
            "id": 76,
            "question": "Which Documents > Mail Merge > Bulk Merge option is available for users to create bulk communications?",
            "options": [
                {
                    "a": "Event",
                    "b": "Fax",
                    "c": "CSV",
                    "d": "Cases"
                }
            ],
            "answer": "Fax.",
            "score": 0,
            "status": ""
        },
        {
            "id": 77,
            "question": "Which statement is true about restricting files in the File Cabinet?",
            "options": [
                {
                    "a": "To make files available to company users only, select the Company-Wide Usage box on the file record.",
                    "b": "NetSuite allows users to restrict individual files.",
                    "c": "The Available Without Login preference is selected by default.",
                    "d": "If a parent folder's restriction changes after a subfolder is created, the subfolder inherits the new restriction."
                }
            ],
            "answer": "To make files available to company users only, select the Company-Wide Usage box on the file record.",
            "score": 0,
            "status": ""
        },
        {
            "id": 78,
            "question": "Where should a user go to set a default expiration (in days) for Estimate records? ",
            "options": [
                {
                    "a": "Sales Preferences",
                    "b": "The Estimate record",
                    "c": "The Customer record",
                    "d": "Accounting Preferences"
                }
            ],
            "answer": "Sales Preferences.",
            "score": 0,
            "status": ""
        },
        {
            "id": 79,
            "question": "Which statements are true when converting Leads? (Choose 2.)",
            "options": [
                {
                    "a": "A Lead record can be converted to the Customer stage without creating a transaction.",
                    "b": "Leads converted to Customers can never be converted back to Leads.",
                    "c": "When an Opportunity is created, the Lead record is assigned the default status set under Sales Preferences.",
                    "d": "Leads can be converted to the Customer stage through a Relationships type CSV import."
                }
            ],
            "answer": "A Lead record can be converted to the Customer stage without creating a transaction." +
                "When an Opportunity is created, the Lead record is assigned the default status set under Sales Preferences.",
            "score": 0,
            "status": ""
        },
        {
            "id": 80,
            "question": "What is the customer status after creating an Estimate for a Lead record?",
            "options": [
                {
                    "a": "Lead",
                    "b": "Prospect",
                    "c": "Customer",
                    "d": "Contact"
                }
            ],
            "answer": "Prospect.",
            "score": 0,
            "status": ""
        },
        {
            "id": 81,
            "question": "Which options can be set by users under Setup > Sales > Sales Preferences > Forecasts? (Choose 2.)",
            "options": [
                {
                    "a": "Calculate Forecasts as Weighted",
                    "b": "Advanced Forecasting",
                    "c": "Use Opportunities in Forecast",
                    "d": "Allow Setting Probability in Forecast Editor"
                }
            ],
            "answer": "Calculate Forecasts as Weighted." +
                "Allow Setting Probability in Forecast Editor.",
            "score": 0,
            "status": ""
        },
        {
            "id": 82,
            "question": "Where can users set subsidiary-level support preferences?",
            "options": [
                {
                    "a": "Case Profile",
                    "b": "Setup > Company > General Preferences",
                    "c": "Setup > Support > Support Preferences",
                    "d": "Subsidiary record"
                }
            ],
            "answer": "Subsidiary record.",
            "score": 0,
            "status": ""
        },
        {
            "id": 83,
            "question": "Which role or roles can edit locked cases?",
            "options": [
                {
                    "a": "Administrator only",
                    "b": "Administrator and Support Administrator",
                    "c": "Administrator, Support Administrator, and Support Manager",
                    "d": "Administrator and roles with Full access on Cases"
                }
            ],
            "answer": "Administrator only.",
            "score": 0,
            "status": ""
        },
        {
            "id": 84,
            "question": "What is the purpose of selecting Unsubscribed to Marketing by Default, under Marketing Preferences?",
            "options": [
                {
                    "a": "To enable the Global Subscription Status field on the Customer record.",
                    "b": "To set the Global Subscription Status to Soft Opt-out once a new Customer record is created.",
                    "c": "Existing customers are updated from Soft Opt-in to Unsubscribed.",
                    "d": "To enable the Campaign Subscription Center link under Home > Dashboard > Settings portlet. "
                }
            ],
            "answer": "To set the Global Subscription Status to Soft Opt-out once a new Customer record is created.",
            "score": 0,
            "status": ""
        },
        {
            "id": 85,
            "question": "Using the Standard Sales Order Form, what transaction is created when billing a Sales Order that has a Payment Method selected?",
            "options": [
                {
                    "a": "Progress Invoice",
                    "b": "Cash Sale",
                    "c": "Customer Payment",
                    "d": "Invoice"
                }
            ],
            "answer": "Cash Sale.",
            "score": 0,
            "status": ""
        },
        {
            "id": 86,
            "question": "Which preference allows users to enter a quantity higher than the quantity committed for an item on an Item Fulfillment form?",
            "options": [
                {
                    "a": "Allow Overage on Item Fulfillments",
                    "b": "Invoice in Advance of Fulfillment",
                    "c": "Show Unfulfilled Items on Invoices",
                    "d": "Allow Overage on Item Commitments"
                }
            ],
            "answer": "Allow Overage on Item Fulfillments.",
            "score": 0,
            "status": ""
        },
        {
            "id": 87,
            "question": "Which three Customer Payment Methods are supported in NetSuite? (Choose 3.)",
            "options": [
                {
                    "a": "ACH Processing",
                    "b": "Electronic Funds Transfer",
                    "c": "PayPal Express for Web Stores",
                    "d": "Credit Card Processing for Sales Orders"
                }
            ],
            "answer": "Electronic Funds Transfer." +
                "PayPal Express for Web Stores." +
                "Credit Card Processing for Sales Orders.",
            "score": 0,
            "status": ""
        },
        {
            "id": 88,
            "question": "Which transaction is created when clicking Refund in a Return Materials Authorization (RMA) record?",
            "options": [
                {
                    "a": "Bill Credit",
                    "b": "Inventory Adjustment",
                    "c": "Customer Refund",
                    "d": "Cash Refund"
                }
            ],
            "answer": "Cash Refund.",
            "score": 0,
            "status": ""
        },
        {
            "id": 89,
            "question": "Which statement is true about Customer Return Authorization records?",
            "options": [
                {
                    "a": "If created with a Credit Form, the record generates a Customer Deposit.",
                    "b": "If created with a Credit Form, the record generates a Credit Memo.",
                    "c": "If created with a Cash Form, the record generates a Credit Memo.",
                    "d": "If created with a Cash Form, the record generates a Cash Sale. "
                }
            ],
            "answer": "If created with a Credit Form, the record generates a Credit Memo.",
            "score": 0,
            "status": ""
        },
        {
            "id": 90,
            "question": "Which item types may be used to cluster Item records and group them into one unit? (Choose 2.)",
            "options": [
                {
                    "a": "Service Items",
                    "b": "Assembly Items",
                    "c": "Kit/Package Items",
                    "d": "Lot-Numbered Items"
                }
            ],
            "answer": "Assembly Items.Kit/Package Items.",
            "score": 0,
            "status": ""
        },
        {
            "id": 91,
            "question": "Which setting changes the quantity and value of an inventory item without entering a purchase order?",
            "options": [
                {
                    "a": "Order Items",
                    "b": "Adjust Inventory",
                    "c": "Reallocate Items",
                    "d": "Review Negative Inventory"
                }
            ],
            "answer": "Adjust Inventory.",
            "score": 0,
            "status": ""
        },
        {
            "id": 92,
            "question": "Which feature enables users to define various units used to stock, purchase, and sell inventory items and to track non-monetary accounts?",
            "options": [
                {
                    "a": "Statistical Accounts",
                    "b": "Multiple Units of Measure",
                    "c": "Lot Tracking",
                    "d": "Bar Coding and Item Labels"
                }
            ],
            "answer": "Multiple Units of Measure.",
            "score": 0,
            "status": ""
        },
        {
            "id": 93,
            "question": "Which statement is true regarding Price Levels?",
            "options": [
                {
                    "a": "When the Multiple Prices feature is enabled, users can create up to 1,000 Price Levels.",
                    "b": "Users can only enter a discount percentage on Price Levels.",
                    "c": "Users are not allowed to inactivate a Price Level when it has a discount/mark-up percentage.",
                    "d": "Price Levels cannot have the same discount/mark-up percentage."
                }
            ],
            "answer": "When the Multiple Prices feature is enabled, users can create up to 1,000 Price Levels.",
            "score": 0,
            "status": ""
        },
        {
            "id": 94,
            "question": "Which accounting preference allows invoices to include memos on Time records when the Bill Costs for Customers feature is enabled?",
            "options": [
                {
                    "a": "Copy Source Memos to Invoices",
                    "b": "Copy Time Memos to Invoices",
                    "c": "Copy All Memos to Invoices",
                    "d": "Copy Expense Memos to Invoices"
                }
            ],
            "answer": "Copy Time Memos to Invoices.",
            "score": 0,
            "status": ""
        },
        {
            "id": 95,
            "question": "Which statement is true regarding the Standard Purchase Order Approval Routing process?",
            "options": [
                {
                    "a": "A Purchase Request is automatically routed to the Supervisor if the Purchase Approver is unable to approve the transaction within 24 hours.",
                    "b": "If the Purchase Limit of the employee is set to zero, then all Purchase Requests are automatically approved, even if a Purchase Approver is set.",
                    "c": "A rejected Purchase Request can still be edited and resubmitted for approval.",
                    "d": "A Purchase Request can no longer be edited once it has been approved."
                }
            ],
            "answer": "A rejected Purchase Request can still be edited and resubmitted for approval.",
            "score": 0,
            "status": ""
        },
        {
            "id": 96,
            "question": "At which status does a Vendor Bill affect Accounts Payable?",
            "options": [
                {
                    "a": "Pending Approval",
                    "b": "Open",
                    "c": "Partially Billed",
                    "d": "Unpaid"
                }
            ],
            "answer": "Open.",
            "score": 0,
            "status": ""
        },
        {
            "id": 97,
            "question": "Which statement is true about NetSuite's ecommerce functionality?",
            "options": [
                {
                    "a": "HTML skills are required to create a website.",
                    "b": "Hosted HTML pages require external hosting sites.",
                    "c": "Shopping cart automatically saves sales orders in the system.",
                    "d": "Integration with the accounting module requires WSDK codes."
                }
            ],
            "answer": "Shopping cart automatically saves sales orders in the system.",
            "score": 0,
            "status": ""
        },
        {
            "id": 98,
            "question": "Which value can users enter in Global Search to include inactive records?",
            "options": [
                {
                    "a": "cu:-abc",
                    "b": "cu:abc",
                    "c": "cu:+abc",
                    "d": "cu:abc+"
                }
            ],
            "answer": "cu:abc+.",
            "score": 0,
            "status": ""
        },
        {
            "id": 99,
            "question": "When added to the Criteria subtab of a Transaction search, which filter displays primary line data rows only?",
            "options": [
                {
                    "a": "Main Line = yes",
                    "b": "Item on Any Line = specify item",
                    "c": "Name = name of the item",
                    "d": "Main Line = any"
                }
            ],
            "answer": "Main Line = yes.",
            "score": 0,
            "status": ""
        },
        {
            "id": 100,
            "question": "Which statement is true about portlets?",
            "options": [
                {
                    "a": "Portlet controls are shown by default but can be hidden by the user.",
                    "b": "Portlets with content that is calculated from current data includes an Export function.",
                    "c": "All portlets can be expanded to full-screen view.",
                    "d": "A pop-up may display, suggesting that portlets can be minimized to speed up dashboard loading time."
                }
            ],
            "answer": "A pop-up may display, suggesting that portlets can be minimized to speed up dashboard loading time.",
            "score": 0,
            "status": ""
        },
        {
            "id": 101,
            "question": "What are three attributes of a custom report? (Choose 3)",
            "options": [
                {
                    "a": "Are available for Web Query",
                    "b": "Provide point-in-time analysis",
                    "c": "Are the basis for custom KPIs",
                    "d": "Can have critical data highlighted"
                }
            ],
            "answer": "Are available for Web Query.Provide point-in-time analysis.",
            "score": 0,
            "status": ""
        },
        {
            "id": 102,
            "question": "What are three unique features to Financial Report Builder? (Choose 3)",
            "options": [
                {
                    "a": "Sections may have specific sorting.",
                    "b": "Sections may have highlighted results.",
                    "c": "Sections may contain subsidiary context.",
                    "d": "Sections may be shared between financial reports."
                }
            ],
            "answer": "Sections may have specific sorting." +
                "Sections may have highlighted results." +
                "Sections may be shared between financial reports.",
            "score": 0,
            "status": ""
        },
        {
            "id": 103,
            "question": "Which two statements are true about the functionality in Report Builder? (choose 2)",
            "options": [
                {
                    "a": "Users can add formula fields to columns.",
                    "b": "User can export reports as an Excel Web Query.",
                    "c": "Users can add custom HTML into column headers.",
                    "d": "Users can customize data through Edit Layout Page."
                }
            ],
            "answer": "Users can add formula fields to columns." +
                "User can export reports as an Excel Web Query.",
            "score": 0,
            "status": ""
        },
        {
            "id": 104,
            "question": "Which use case requires the use of a report rather than a search?",
            "options": [
                {
                    "a": "Key Performance Indicator",
                    "b": "Dashboard Reminder",
                    "c": "KPI Scorecard",
                    "d": "Web Query enabled spreadsheet"
                }
            ],
            "answer": "Web Query enabled spreadsheet.",
            "score": 0,
            "status": ""
        },
        {
            "id": 105,
            "question": "Which statement is true about Mass Updates?",
            "options": [
                {
                    "a": "A Mass Update definition must be saved before users can click Perform Update.",
                    "b": "The first step to perform a Mass Update is to define new values that will be reflected on records.",
                    "c": "On the Mass Update Preview Results page, users can exclude individual records.",
                    "d": "Saved Mass Updates can be found on the list of Saved Searches."
                }
            ],
            "answer": "On the Mass Update Preview Results page, users can exclude individual records.",
            "score": 0,
            "status": ""
        },
        {
            "id": 106,
            "question": "Which resources under the Support tab can a user access to submit a case?",
            "options": [
                {
                    "a": "NetSuite Administrator Group",
                    "b": "NetSuite Account Center",
                    "c": "NetSuite Support Aid",
                    "d": "NetSuite Assistant"
                }
            ],
            "answer": "NetSuite Account Center.",
            "score": 0,
            "status": ""
        },
        {
            "id": 107,
            "question": "Which is a channel for contacting NetSuite Customer Support?",
            "options": [
                {
                    "a": "Submit a Support Ticket using the Employee Center role.",
                    "b": "Start a Live Chat conversation at the NetSuite Visitor home page.",
                    "c": "Email a NetSuite Customer Support representative directly.",
                    "d": "Submit an Online Case via SuiteAnswers."
                }
            ],
            "answer": "Submit an Online Case via SuiteAnswers.",
            "score": 0,
            "status": ""
        },
        {
            "id": 108,
            "question": "What can users find in SuiteAnswers, the NetSuite self-service support site?",
            "options": [
                {
                    "a": "New Release Notes",
                    "b": "User Account Provisioning details",
                    "c": "End user license agreement",
                    "d": "The user account's File Cabinet usage"
                }
            ],
            "answer": "New Release Notes.",
            "score": 0,
            "status": ""
        },
        {
            "id": 109,
            "question": "Which functionality is disabled in the Release Preview account?",
            "options": [
                {
                    "a": "Payroll",
                    "b": "Email Campaigns",
                    "c": "Two-Factor Authentication",
                    "d": "Memorized Transactions"
                }
            ],
            "answer": "Payroll.",
            "score": 0,
            "status": ""
        },
        {
            "id": 110,
            "question": "'Don and Mark both have the Consultant role.The role has the Create permission for Opportunities.Under the Global Permissions subtab of his Employee record, Don is provisioned Edit permission for Opportunities.Which statement is true?'",
            "options": [
                {
                    "a": "They can both edit Opportunity records.",
                    "b": "Mark can create Opportunity records while Don can edit and create Opportunity records.",
                    "c": "Don can create Opportunity records while Mark can edit and create Opportunity records.",
                    "d": "Neither Don nor Mark can edit Opportunity records."
                }
            ],
            "answer": "Mark can create Opportunity records while Don can edit and create Opportunity records.",
            "score": 0,
            "status": ""
        },
        {
            "id": 111,
            "question": "Which attribute cannot be modified when editing a custom role?",
            "options": [
                {
                    "a": "Inactive",
                    "b": "Center Type",
                    "c": "Employee Restrictions",
                    "d": "Two-Factor Authentication"
                }
            ],
            "answer": "Center Type.",
            "score": 0,
            "status": ""
        },
        {
            "id": 112,
            "question": "What is a recommended practice when adding a user?",
            "options": [
                {
                    "a": "Customize a separate role for each user.",
                    "b": "Assign a custom role.",
                    "c": "Assign a NetSuite standard role.",
                    "d": "Use Global Permissions with standard roles"
                }
            ],
            "answer": "Assign a custom role.",
            "score": 0,
            "status": ""
        },
        {
            "id": 113,
            "question": "What is the first step an Admin should take after being notified that an employee will be terminated?",
            "options": [
                {
                    "a": "Delete the Employee record.",
                    "b": "Inactivate the Employee record.",
                    "c": "Change the Employees password.",
                    "d": "Remove System Access for Employee."
                }
            ],
            "answer": "Remove System Access for Employee.",
            "score": 0,
            "status": ""
        },
        {
            "id": 114,
            "question": "Which standard NetSuite role is set up with mandatory Two-Factor Authentication?",
            "options": [
                {
                    "a": "CEO",
                    "b": "Administrator",
                    "c": "Issue Administrator",
                    "d": "CFO"
                }
            ],
            "answer": "Administrator.",
            "score": 0,
            "status": ""
        },
        {
            "id": 115,
            "question": "When is a user asked to answer a security question before they can log in to NetSuite?",
            "options": [
                {
                    "a": "When the user provides an incorrect password upon initial login.",
                    "b": "If the user logs in using a role with two-factor authentication enabled.",
                    "c": "When a user proactively changes their password.",
                    "d": "If the user attempts to log in using a new computer."
                }
            ],
            "answer": "If the user attempts to log in using a new computer.",
            "score": 0,
            "status": ""
        },
        {
            "id": 116,
            "question": "What settings can users change by clicking Set Preferences from the Settings portlet?",
            "options": [
                {
                    "a": "Enable Features",
                    "b": "Company Preferences",
                    "c": "Accounting Preferences",
                    "d": "User Preferences"
                }
            ],
            "answer": "User Preferences.",
            "score": 0,
            "status": ""
        },
        {
            "id": 117,
            "question": "Where can you find logged OLD and NEW GL Impact of some transaction?",
            "options": [
                {
                    "a": "System notes",
                    "b": "My Login Audit",
                    "c": "Transaction Audit Trail",
                    "d": "Transaction Numbering Audit Log"
                }
            ],
            "answer": "System notes.",
            "score": 0,
            "status": ""
        }
    ]
}
var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    this.contador = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
        this.currentque = cque;
        if (this.currentque < totalque) {
            $("#tque").html(totalque);
            $("#previous").attr("disabled", false);
            $("#next").attr("disabled", false);
            $("#qid").html(quiz.JS[this.currentque].id + '.');
            $("#question").html(quiz.JS[this.currentque].question);
            $("#question-options").html("");
            for (var key in quiz.JS[this.currentque].options[0]) {
                if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
                    $("#question-options").append(
                        "<div class='form-check option-block'>" +
                        "<label class='form-check-label'>" +
                        "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
                        quiz.JS[this.currentque].options[0][key] +
                        "</span></label>"
                    );
                }
            }
        }
        if (this.currentque <= 0) {
            $("#previous").attr("disabled", true);
        }
        console.log(`this.contador: ${this.contador} `);
        console.log(`totalque: ${totalque} `);

        if (this.contador == totalque) {
            $('#next').attr('disabled', true);
            for (var i = 0; i < totalque; i++) {
                this.score = this.score + quiz.JS[i].score;
            }
            return this.showResult(this.score);
        }
    }
    this.showResult = function (scr) {
        $("#result").addClass('result');
        $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
        for (var j = 0; j < totalque; j++) {
            var res;
            if (quiz.JS[j].score == 0) {
                res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
            } else {
                res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
            }
            $("#result").append(
                '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
                '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
                '<div class="last-row"><b>Score:</b> &nbsp;' + res +
                '</div>'
            );
        }
    }
    this.checkAnswer = function (option) {
        var answer = quiz.JS[this.currentque].answer;
        var result;
        console.log("Correct answer/s: " + answer);

        if (quiz.JS[this.currentque].answer.indexOf(option) > -1) {
            if (quiz.JS[this.currentque].score == "") {
                quiz.JS[this.currentque].score = 1;
                quiz.JS[this.currentque].status = "correct";
            }
            result = true;
        } else {
            quiz.JS[this.currentque].status = "wrong";
            result = confirm("Incorrect");
        }
        return result;
    }

    this.changeQuestion = function (cque) {
        var next = this.currentque + cque;
        if (next > totalque) {
            next = next - totalque;
            console.log(`next -- : ${next} `);
        }
        this.currentque = next;
        this.contador++;
        this.displayQuiz(this.currentque);
    }
}
var jsq = new quizApp();
var selectedopt;
var step = 31;
$(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
        //var radio = $(this).find('input:radio');
        $(this).prop("checked", true);
        selectedopt = $(this).val();
    });
});
$('#next').click(function (e) {
    e.preventDefault();
    let result;
    if (selectedopt) {
        result = jsq.checkAnswer(selectedopt);
        selectedopt = null;
    }
    if (result)
        jsq.changeQuestion(step);
});
$("#question-options").keypress(function (event) {
    if (event.key === "Enter") {
        $("#next").click();
    }
});
$('#previous').click(function (e) {
    e.preventDefault();
    jsq.changeQuestion(-step);
});