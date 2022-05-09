import DefaultLayout from '../../components/DefaultLayout'

const List = () => {    
    return (
        <DefaultLayout>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </DefaultLayout>
    )
}

export default List