import Responsive from '../Components/common/Responsive'

const Comment = () => {
    return (
        <Responsive>
            <h1>댓글 리스트 (2)</h1>
            <ul>
                <li>
                    <form>
                        <input type='text' />
                        <input type='submit' />
                    </form>
                </li>
                <li>
                    <ul>
                        <li>아이디</li>
                        <li>내용</li>
                        <li>날짜</li>
                    </ul>
                    <ul>
                        <li>아이디</li>
                        <li>내용</li>
                        <li>날짜</li>
                    </ul>
                </li>
            </ul>
        </Responsive>
    )
}

export default Comment