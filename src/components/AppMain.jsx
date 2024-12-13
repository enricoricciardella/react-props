import style from "./AppMain.module.css";

function AppMain() {
    return (
        <div className={style.card}>
            <img src="/pisa.jpg" alt="" />
            <div>
                <h6 className="padding">Titolo del post</h6>
                <p className="padding">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque fuga magni quo reiciendis ea totam quis cumque, similique accusamus non quaerat </p>
                <button className="padding marginBottom">Leggi di più</button>
            </div>
        </div>

    )

}
export default AppMain;