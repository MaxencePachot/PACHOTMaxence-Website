// Technology logos per project. Kept out of the content files so the two
// languages never drift apart on something that carries no words.
const T = (src, alt, variant) => ({ src, alt, variant });

export const PROJECT_LOGOS = {
  'pharma-lakehouse': [
    T('/terraform.svg', 'Terraform'),
    T('/azure.svg', 'Microsoft Azure'),
    T('/databricks.svg', 'Databricks'),
    T('/python.svg', 'Python'),
    T('/sql-server.svg', 'SQL Server', 'wide'),
    T('/azuredevops.svg', 'Azure DevOps'),
    T('/github.svg', 'GitHub'),
  ],
  dpaas: [
    T('/terraform.svg', 'Terraform'),
    T('/azure.svg', 'Microsoft Azure'),
    T('/databricks.svg', 'Databricks'),
    T('/github.svg', 'GitHub Actions'),
    T('/linux.svg', 'Linux', 'wide'),
  ],
  'social-insurance-dbt': [
    T('/sql-server.svg', 'SQL Server', 'wide'),
    T('/python.svg', 'Python'),
    T('/github.svg', 'Git'),
  ],
  'cost-refactor': [
    T('/azure.svg', 'Microsoft Azure'),
    T('/mongodb.svg', 'MongoDB', 'wide'),
    T('/python.svg', 'Python'),
    T('/fastapi.svg', 'FastAPI'),
    T('/docker.svg', 'Docker'),
    T('/github.svg', 'GitHub'),
  ],
  'oracle-dba': [
    T('/oracle.svg', 'Oracle Database', 'wide'),
    T('/linux.svg', 'Linux', 'wide'),
    T('/python.svg', 'Python'),
    T('/github.svg', 'Git'),
  ],
  'this-site': [
    T('/react.svg', 'React'),
    T('/vite.svg', 'Vite'),
    T('/html5.svg', 'HTML5'),
    T('/css.svg', 'CSS'),
    T('/netlify.svg', 'Netlify'),
    T('/github.svg', 'GitHub'),
  ],
};
