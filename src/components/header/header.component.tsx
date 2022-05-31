import './header.css'

export const HeaderComponent = (): JSX.Element => (
  <header className="flex-spaced-between-content">
    <div aria-label="left-side">
      <h1 className="title">Gabriel Rodrigues</h1>
      <p className="subtitle">
        Full stack web developer / Computer Engineer
      </p>
    </div>
    <div className="text-align-right" aria-label="right-side">
      <p>
        <small>
          Professional portfolio website
        </small>
      </p>
    </div>
  </header>
)
