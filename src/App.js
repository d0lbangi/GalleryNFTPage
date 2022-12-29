import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

// import MainLogo from "src/components/atoms/MainLogo"
// import {
//   Box,
//   Flex,
// } from "@chakra-ui/react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
`;

const Navigator = styled.div`
  height: 40px;
  width: 100%;
  background-color: aquamarine;
  border: 1px solid black;
  position: fixed;
`;

const ContentWrap = styled.div`
  flex-direction: row;
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 70px;
`;

const LeftBar = styled.main`
  justify-content: flex-start;
  width: 200px;
  align-items: stretch;
  height: 500vh;
  background-color: purple;
  border: 1px solid black;
  
`;

const FilterBox = styled.main`
  width: 150px;
  height: 300px;
  background-color: yellow;
  border: 1px solid black;
  border-radius: 20px;
  position: relative;
`;

const FilterBoxSetting = styled.main`
  width: 100px;
  height: 250px;
  background-color: tomato;
  border: 1px solid black;
  left:25px;
  top:22px;
  position: absolute;
`;

const FilterTitleBox = styled.div`
  width: 100%;
  height: 30px;
  background-color: green;
  border: 1px solid black;
`;

const FilterTextBox = styled.div`
  font-size: 20px;
  font-style: normal;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const FilterBoxes = styled.button`
    width: 100%;
    height: 44px;
    background-color: blueviolet;
`;

const RightBar = styled.main`
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  align-items: stretch;
  height: 500vh;
  background-color: purple;
  border: 1px solid black;
  padding-left: 30px;
`;

const SearchBar = styled.main`
  width: 100%;
  height: 60px;
  background-color: red;
  border: 1px solid black;
  position: relative;
`;

const SearchBox = styled.main`
  width: 70px;
  height: 20px;
  right:1%;
  bottom:5%;
  background-color: white;
  border: 1px solid black;
  border-radius: 7px;
  position: absolute; 
`;

const NFTItemsBar = styled.main`
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 300vh;
  background-color: blue;
  border: 1px solid black;
  flex-wrap: wrap;
  
`;

const NFTItemsBox = styled.main`
width: 130px;
height: 200px;
background-color: gray;
border: 1px solid black;
margin-top: 10px;
padding: 0 18px;
`;

const NFTPictureBox = styled.main`
flex: auto;
width: 100%;
height: 140px;
display: flex;
background-color: pink;
border: 1px solid black;
`;

const NFTTextBox = styled.main`
width: 100%;
height: 40px;
background-color: orange;
border: 1px solid black;
`;

const NFTTextList = styled.div`
  font-size: 15px;
  font-style: normal;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 5px;
  margin-right: 5px;
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navigator>
          {/* <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }}>
            <a href="/">
              <Box height={30} width={70} cursor={"pointer"}>
                <MainLogo />
              </Box>
            </a>
          </Flex> */}
        </Navigator>
          <ContentWrap>
            <LeftBar>
              <FilterBox>
                <FilterBoxSetting>
                  <FilterTitleBox>
                    <FilterTextBox>Filter</FilterTextBox>
                  </FilterTitleBox>
                  <FilterBoxes/>
                  <FilterBoxes/>
                  <FilterBoxes/>
                  <FilterBoxes/>
                  <FilterBoxes/>
                </FilterBoxSetting>
              </FilterBox>
            </LeftBar>
            <RightBar>
              <SearchBar>
                <SearchBox/>
              </SearchBar>
              <NFTItemsBar>

                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>
                <NFTItemsBox>
                  <NFTPictureBox/>
                  <NFTTextBox>
                    <NFTTextList>Aslan #1</NFTTextList>
                  </NFTTextBox>
                </NFTItemsBox>






              </NFTItemsBar>
            </RightBar>
          </ContentWrap>
      </Container>
    </>
  );
}

export default App;