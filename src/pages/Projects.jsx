import React from 'react';
import Navbar from '../components/Navbar';
import '../styles.css';

const Projects = () => {
  return (
    <div style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>
      <Navbar />
      <p></p>
      <center><h1>My projects</h1></center>
      <p></p>
      <div class="col-lg-9">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Refactor infrastructure to reduce costs</h4>
            <b><p class="card-text">
            Technology Used:
            </p></b>
            <table>
              <tbody>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Programming  Language: Python, SQL</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Cloud Services: Azure Serverless Containers</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• CI/CD Tool: Azure Devops</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Containerization: Docker</td>
                </tr>
              </tbody>
            </table>
            <p></p>
            <b><p class="card-text">
            Key Features:
            </p></b>
            <table>
              <tbody>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Reduce infrastructure costs by 10</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Enhance existing project functionality with new data sources and features</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Automate deployment processes</td>
                </tr>
              </tbody>
            </table>
            <p></p>
            <b><p class="card-text">
            Project Highlights:
            </p></b>
            <table>
              <tbody>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Added a new data source to improve project capabilities</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Developed and integrated new features using Python</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Containerized applications with Docker for consistent deployment and scalability</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Configured Azure DevOps CI/CD pipelines for automated deployment of Dockerized applications</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Migrated from Kubernetes to serverless containers on Azure to reduce operational costs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p></p>
      <div class="col-lg-9">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Data Migration of Finance Data on SQL Server</h4>
            <b><p class="card-text">
            Technology Used:
            </p></b>
            <table>
              <tbody>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Database: SQL Server</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Programming Language: SQL, T-SQL, Python</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Documentation: Business requirements documentation tools</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Testing: SQL scripts</td>
                </tr>
              </tbody>
            </table>
            <p></p>
            <b><p class="card-text">
            Key Features:
            </p></b>
            <table>
              <tbody>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Understand and document business requirements for data migration</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Design data models for the staging area</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Develop stored procedures for ingestion, transformation, and loading (ETL)</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Implement unit tests and integration tests to ensure data accuracy and reliability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p></p>
      <div class="col-lg-9">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">CV Website using React</h4>
            <b><p class="card-text">
            Technology Stack:
            </p></b>
            <table>
              <tbody>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Frontend: React</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Build Tool: Vite</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Markup and Styling: HTML, CSS</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• UI Framework: Material Kit 2</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Deployment: Netlify</td>
                </tr>
              </tbody>
            </table>
            <p></p>
            <b><p class="card-text">
            Key Features:
            </p></b>
            <table>
              <tbody>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Responsive design ensuring optimal viewing on all devices</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Modern, clean, and professional UI with Material Kit 2 components</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Fast and efficient development with Vite's rapid build and hot module replacement</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Hosted and continuously deployed on Netlify for seamless updates</td>
                </tr>
                <tr>
                  <td class="px-2 py-1"></td>
                  <td>• Customized components and styles to reflect personal branding</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
