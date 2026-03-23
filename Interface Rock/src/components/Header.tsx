import "./Header.css"
import logoSpoti from "../imagen/logo.png"


function Header({
  onMesChange,
  mesActivo,
}: {
  onMesChange: (mes: "febrero" | "marzo" | "abril") => void
  mesActivo: "febrero" | "marzo" | "abril"
}) {
  return (
    <header className="header">
      <div className="logoSpoti">
        <img src={logoSpoti} alt="" />
      </div>
      <div className="botonera">
        <button
          className={`btn ${mesActivo === "febrero" ? "activo" : ""}`}
          onClick={() => onMesChange("febrero")}
        >
          Febrero
        </button>
        <button
          className={`btn ${mesActivo === "marzo" ? "activo" : ""}`}
          onClick={() => onMesChange("marzo")}
        >
          Marzo
        </button>
        <button
          className={`btn ${mesActivo === "abril" ? "activo" : ""}`}
          onClick={() => onMesChange("abril")}
        >
          Abril
        </button>
      </div>
    </header>
  )
}

export default Header