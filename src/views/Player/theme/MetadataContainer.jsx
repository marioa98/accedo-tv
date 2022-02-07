import styled from "styled-components"
import colors from "../../../theme/colors";

const MetadataContainer = styled.div`
  position: absolute;
  color: ${colors.white};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  h1 {
    margin-top: 40px;
    font-size: 36px
  }

  h1, p {
    margin-left: 40px;
  }

  p {
    font-size: 24px
  }
`;

export default MetadataContainer;
