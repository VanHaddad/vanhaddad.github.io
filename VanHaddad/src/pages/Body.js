import React from "react";
import Tags from "./Tags";

export default function Body() {
  return (
    <div className="column mx-3 my-3 is-half">
      <div className="content">
        <blockquote>
          Senior Software Developer with 6 years of experience solving business
          problems with technical solutions. <br></br>
          Takes pride in delivering high quality and robust code. Passionate for
          both learning new skills, as well as growing those around me to build
          a top-notch team.
        </blockquote>
        <p>
          Hileman Group, <em>Cleveland, Ohio</em>
          <br></br>
          <strong>Senior Developer</strong>, April 2018-Present <br></br>
        </p>
        <ul>
          <li>
            Perform code reviews, share knowledge and pair program to foster
            growth within the development team
          </li>
          <li>
            Act as subject matter expert for both new and existing clients to
            provide a high level of technical insight when working through
            potential solutions to meet their needs
          </li>
          <li>
            Estimate level of effort, provide timelines, and schedule myself and
            other developers on multiple concurrent projects to ensure each is
            completed on time and under budget
          </li>
          <li>
            Make decisions on approach for new projects to allow myself and the
            team the chance to gain experience in emerging technologies
          </li>
          <li>
            Work with both Kentico and Sitecore CMS platforms to develop,
            maintain, and enhance client web sites
          </li>
        </ul>

        <p>
          Avantia, Inc., <em>Valley View, Ohio</em>
          <br></br>
          <strong>Developer</strong>, October 2015-April 2018 <br></br>
        </p>
        <ul>
          <li>
            Implement and extend the Sitecore CMS, including building dynamic
            and reusable components and creating search functionality using Solr
            indexing
          </li>
          <li>
            Integrate with multiple outside services to gather data and extend
            platform functionality
          </li>
          <li>
            Build sites in .NET MVC, supplemented by different technologies on
            both the back and front ends
          </li>
          <li>
            Work with team members to ensure success of the project by jumping
            to assist as needed
          </li>
        </ul>

        <p>
          Acumen Solutions, <em>Independence, Ohio</em>
          <br></br>
          <strong>Developer</strong>, June 2014-October 2015 <br></br>
        </p>
        <ul>
          <li>
            Design, develop and support Salesforce based solutions in an agile
            environment over many iterations
          </li>
          <li>
            Communicate frequently to team regarding status, issues and blockers
          </li>
          <li>
            Manage migration of code and configuration between environments
          </li>
        </ul>
      </div>
      <h2 className="subtitle">Skills</h2>
      <Tags></Tags>
    </div>
  )
}
