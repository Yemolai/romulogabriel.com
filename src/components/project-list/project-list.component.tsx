import { ProjectListProps } from "./project-list.props";

export const ProjectList = ({ list }: ProjectListProps):JSX.Element => (
  <>
  <h2>Projects</h2>
    <ul>
      {list.map(({ label, url }, idx) => (
        <li>
          <a href={url} key={idx} target="_blank">
            <small>{label}</small>
          </a>
        </li>
      ))}
    </ul>
  </>
)
