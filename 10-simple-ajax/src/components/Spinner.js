import React, { memo } from "react";
import PropTypes from "prop-types";

/**
 * 로딩바 컴포넌트
 */
// --> https://mhnpd.github.io/react-loader-spinner/
import { Blocks } from "react-loader-spinner";

/**
 * use-age
 *
 * const [loading, setLoading] = useState(false);
 *
 * <Spinner loading={loading} width={70} height={70} />
 */
const Spinner = memo(({ loading = true, width = 100, height = 100 }) => {
  return (
    <Blocks
      visible={loading}
      width={width}
      height={height}
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: "fixed",
        zIndex: 9999,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      wrapperClass="blocks-wrapper"
    />
  );
});

/** 데이터 타입 설정 **/
Spinner.propTypes = {
  loading: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Spinner;
