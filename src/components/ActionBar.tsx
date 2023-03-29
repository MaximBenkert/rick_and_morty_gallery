import {ChangeEvent} from "react";

type ActionBarProps = {
    searchText: string,
    onTextChange: (value: string) => void
}
export default function ActionBar(props: ActionBarProps) {

    function onTextChange(event: ChangeEvent<HTMLInputElement>) {
        props.onTextChange(event.target.value)
    }

    return (
        <div>
            <p>{props.searchText}</p>
            <input value={props.searchText} onChange={onTextChange}/>
        </div>
    )
}
