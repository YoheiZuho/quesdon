import * as React from "react"
import { Link } from "react-router-dom"
import { me } from "../../initial-state"
import { PageLatest } from "./latest"

export class PageIndex extends React.Component {
    render() {
        return <div>
            <title>Quesdon</title>
            <h1>Quesdon</h1>
            <p>ザ・インタビューズとかaskfmとかそんなかんじのやつのMastodonアカウントで使えるやつです</p>
            <p><strong>
                誠に申し訳ありませんが、弊Quesdonサーバーは負荷対策のため、ログインをYづドン専用にしています。
            </strong></p>
            <p>{me ? <Link to="/my">マイページ</Link> : <Link to="/login">ログイン</Link>}</p>
            <PageLatest />
        </div>
    }
}
