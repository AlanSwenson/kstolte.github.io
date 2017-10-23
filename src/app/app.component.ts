import { Component } from '@angular/core';

export class Job {
  title: string;
  employer: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  jobSummary: string;
  jobRoles?: Role[];
  jobTechnologies?: Technologies[];
  cvOnly?: boolean;
}
export class Role {
  Role: string;
}
export class Technologies {
  Technology: string;
  Color?: string;
}

const MSSQL: Technologies = {
  Technology: 'MSSQL Server',
  Color: 'red'
}
const NetFramework: Technologies = {
  Technology: '.Net Framework',
  Color: 'purple'
}
const NetCore: Technologies = {
  Technology: '.Net Core 2.0',
  Color: 'green'
}
const SharePoint: Technologies = {
  Technology: 'SharePoint',
  Color: 'yellow'
}
const AppleComp: Technologies = {
  Technology: 'MacOS',
  Color: 'Silver'
}

const JOBS: Job[] = [
  {
    title: 'Software Developer',
    employer: 'Yellow Dog Software',
    location: 'Norfolk, Va',
    startDate: new Date('2016-11-01'),
    endDate: null,
    jobSummary: `Develop and maintain components of an inventory management software solution.
     The solution is based on a MSSQL database backend with a Long Term Support WinForms Client application.
     Recent development has been based around new feature implementation in WinForms Client, Online Angular
     Web App, .Net Core API, and iOS/Android Applications.`,
    jobRoles: [
      { Role: 'Resolve all issues with software and final escalation point for end users.' },
      { Role: 'Conceptualize, plan, and execute new features and technology into the software solution.' },
      { Role: 'Create system integrations between Yellow Dog Inventory Systems and Third Party.' },
      { Role: 'Architected a tool for Support and Implementation groups to track real time system status to provide proactive support and client assistance.' }
    ],
    jobTechnologies: [
      MSSQL,
      NetFramework,
      NetCore,
      { Technology: 'GitHub', Color: '#333' },
      { Technology: 'Git'},
      { Technology: 'Angular' },
      { Technology: 'WinForms' },
      { Technology: 'REST APIs' },
      { Technology: 'GraphQL', Color: '#E10098' },
      AppleComp
    ]
  },
  {
    title: 'DBA / IT Manager',
    employer: 'Yellow Dog Software',
    location: 'Norfolk, Va',
    startDate: new Date('2016-05-15'),
    endDate: new Date('2016-10-31'),
    jobSummary: `Served in a DevOps Role for a Software Development Organization.
    Served as the escalation point for support tickets to provide fixes and fact finding
    prior to being escalated to the development group. `,
    jobRoles: [
      { Role: 'Maintained and supported 50+ physical servers that were but onsite and hosted through a third party datacenter.' },
      { Role: 'Provide Tier 4 support for escalation of tickets.' },
      { Role: 'Identify opportunities for database improvement in support of the software.' },
      { Role: 'Compose, Release, and Apply SQL Scripts to production environments to resolve bugs or optimize client systems.' },
      { Role: 'Assisted support team with timely ticket resolution.' },
      { Role: 'Set up a Network Management System to track uptime and maintained an uptime of 99.99% across the server and network infrustructure.' }
    ],
    jobTechnologies: [
      MSSQL,
      NetFramework,
      { Technology: 'PowerShell'}
    ]
  },
  {
    title: 'Application Support Analyst',
    employer: 'Gold Key | PHR Hotels & Resorts',
    location: 'Virginia Beach, Va',
    startDate: new Date('2015-06-01'),
    endDate: new Date('2016-05-15'),
    jobSummary:
    'The Application Support Analyst is primarily responsible for implementing and maintaining the Software items in the Service ' +
    'Portfolio and Pipeline. This includes tier 2 & 3 end user support, diagnosing software problems and scheduled maintenance. ' +
    'In addition, they provide advanced system administration/configuration tasks and consult customers on proposed changes ' +
    'within In House (Custom) Applications and 3rd party COTS software products.',
    jobRoles: [
      { Role: 'Develop SQL reports and queries for IT Department and customer use.' },
      { Role: 'Maintain SharePoint site with on premise SharePoint Server Farm.' },
      { Role: 'Develop multifaceted SharePoint sites assist customers with storing and cataloging documents, data, and processes. ' },
      { Role: 'Provide 3rd tier support for end user support.' },
      { Role: 'Conduct deep dives into software application logic while troubleshooting and perform analysis on complex application usage scenarios.' },
      { Role: 'Provide advanced system administration/configuration tasks and consult customers on proposed changes within In House (Custom) Applications and 3rd party COTS software products.' }
    ],
    jobTechnologies: [
      MSSQL,
      SharePoint,
      { Technology: 'Visual Basic' },
      { Technology: 'WireShark' },
      { Technology: 'Juniper Networks' },
      { Technology: 'POSiTouch' },
      { Technology: 'WireShark' },
      { Technology: 'Micros POS' },
      { Technology: 'Opera PMS' },
      { Technology: 'OnQ PMS' },
      { Technology: 'Microsoft Dynamics SL' },
      { Technology: 'IIS' },
      AppleComp
    ]
  },
  {
    title: 'Support Tech I',
    employer: 'Gold Key | PHR Hotels & Resorts',
    location: 'Virginia Beach, Va',
    startDate: new Date('2013-03-15'),
    endDate: new Date('2015-06-01'),
    jobSummary: 'Provide onsite and phone support to all levels of employees',
    jobRoles: [
      { Role: 'Develop low to medium level SQL reports and queries for IT Department and customer use.' },
      { Role: 'Provide desktop and server side support for multiple hardware configurations, operating systems, and applications.' },
      { Role: 'Maintain SharePoint site with on premise SharePoint Server Farm.' },
      { Role: 'Conduct deep dives into software application logic while troubleshooting and perform analysis on complex application usage scenarios.' },
      { Role: 'Setup and delivered a SharePoint site that securely stores all associate personnel records.' },
      { Role: 'Troubleshoot, maintain, and support multiple internal applications on a variety of platforms and frameworks.' },
      { Role: 'Implement complex applications and products to outlets along the Va Beach Oceanfront.' }
    ],
    jobTechnologies: [
      MSSQL,
      SharePoint,
      { Technology: 'Visual Basic' },
      { Technology: 'WireShark' },
      { Technology: 'Juniper Networks' },
      { Technology: 'POSiTouch' },
      { Technology: 'WireShark' },
      AppleComp
    ]
  },
  {
    title: 'Junior Project Manager',
    employer: 'Met Life',
    location: 'Greater New York City Area',
    startDate: new Date('2012-06-15'),
    endDate: new Date('2013-03-15'),
    jobSummary: `Telecommuting job to assist with an enterprise wide migration from Lotus Notes to Microsoft SharePoint.`,
    jobRoles: [
      { Role: 'Co-Managed an Enterprise-wide migration from Lotus Notes applications and databases to SharePoint.' },
      { Role: 'Constant communication to clients on a daily basis, to keep them notified on the status of their projects.' },
      { Role: 'Maintained Excellent Customer Service with the Business Owners of Applications.' },
      { Role: 'Assisted with maintaining security permissions on SharePoint websites.' }
    ],
    jobTechnologies: [
      SharePoint,
      { Technology: 'Lotus Notes' }
    ]
  },
  {
    title: 'Production Assistant',
    employer: 'Studio Center Total Production',
    location: 'Norfolk, Va',
    startDate: new Date('2007-05-20'),
    endDate: new Date('2013-03-15'),
    jobSummary: `Telecommuting job to assist with an enterprise wide migration from Lotus Notes to Microsoft SharePoint.
                  My components of the project was successful and termination was based on the ending of the project.`,
    jobRoles: [
      { Role: 'Created a Collaboration tool to track the status of contacting talent in various localities and time zones.' },
      { Role: 'Provide recording services for auditioning voice talent prior to being booked by a client.' },
      { Role: 'Troubleshoot Audio Routing and Patching issues.' },
      { Role: 'Provide expert feedback and guide talent to performing at their best.' }
    ],
    jobTechnologies: [
      { Technology: 'Google Sheets' },
      { Technology: 'Pro Tools' },
      AppleComp
    ]
  },
  {
    title: 'Audio Engineer',
    employer: 'Roper Performing Arts Center',
    location: 'Norfolk, Va',
    startDate: new Date('2009-02-01'),
    endDate: new Date('2012-06-15'),
    jobSummary: ``,
    jobRoles: [
      { Role: 'Perform as a Stage Manager to make critical decisions while in rehearsals and the performance of live theatrical performances.' },
      { Role: 'Provide live sound reinforcement for various types of performing genres.' },
      { Role: 'Designed the updated theatre’s sound system, still currently in use.' },
      { Role: 'Assist with load-in and load-out of equipment and props for use during stage performances.' }
    ],
    jobTechnologies: [
      { Technology: 'Google Sheets' },
      { Technology: 'Pro Tools' },
      AppleComp
    ]
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Keith Stolte';
  jobs = JOBS;
}