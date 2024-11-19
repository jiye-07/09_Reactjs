
class UtilHelper {
    /**
     * URL 의 querystring을 JSON 객체로 변환하여 리턴한다
     * @returns json object
     */
    getQuery(search = location.search) {
        const query = new URLSearchParams(search);
        return Object.fromEntries(query);
    }

    /**
     * 쿠키에 저장된 값을 반환한다. 값이 없을 경우 undifind를 반환한다
     * @param {string} name - 쿠키의 이름 
     * @returns 쿠키값
     */
    getCookie(name) {
        const regex = new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)");
    
        let matches = document.cookie.match(regex);

        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    /**
     * 
     * @param {string} name - 쿠키 이름
     * @param {*} value - 저장할 값
     * @param {number} maxAge - 유효시간(초단위) 
     */
    setCookie(name, value, maxAge) {
        const encName = encodeURIComponent(name);
        const encValue = encodeURIComponent(value);
        let updateCookie = `${encName}=${encValue};`;

        updateCookie += "path=/;";

        if (maxAge !== undefined) {
            updateCookie += `max-age=${maxAge}`;
        }

        document.cookie = updateCookie;
    }
}

// const utilHelper = new UtilHelper();
export default new UtilHelper();

