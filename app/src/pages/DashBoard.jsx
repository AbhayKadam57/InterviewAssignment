import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Mobile, Tablet } from "../responsive";
import axios from "axios";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 3em;
  ${Tablet({ flexDirection: "column", padding: "1em" })}
`;

const Left = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  flex: 1;
  border-right: 2px solid black;
  min-height: 100vh;
  gap: 1em;
  padding-right: 3em;
  padding-top: 1em;
  ${Tablet({
    borderRight: "none",
    borderBottom: "2px solid black",
    minHeight: "50vh",
    paddingBottom: "3em",
  })}
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: 400;
`;

const MessageArea = styled.input`
  width: 100%;
  height: 5em;
  font-size: 1.2em;
  background-color: #d9d9d9;
  font-weight: 400;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 1em;
`;

const Right = styled.div`
  flex: 2;
  min-height: 100vh;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  padding-left: 3em;
  ${Tablet({ width: "100%", paddingLeft: "0" })}
`;

const SaveButton = styled.button`
  width: 11em;
  height: 3em;
  background-color: #fc9797;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  font-weight: 400;
  cursor: pointer;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  width: 80%;
  gap: 2em;
  ${Tablet({ width: "100%" })}
`;

const Top = styled.div`
  display: flex;
  width: 80%;
  padding: 1em;
  border-bottom: 2px solid black;
`;

const NoteList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 2.5em;
`;

const Note = styled.div`
  width: 100%;
  height: 4em;
  background-color: #f2fec3;
  position: relative;
  display: flex;
  align-items: center;
  padding: 1em;
  ${Mobile({ display: "flex", justifyContent: "space-between" })}

  p {
    font-size: 1.2em;
    font-weight: 400;
  }
`;

const Time = styled.p`
  font-size: 1.2em;
  font-weight: 400;
  position: absolute;
  right: 0;
  bottom: -1.5em;
  ${Mobile({ position: "relative", top: "0" })}
`;

const DashBoard = () => {
  const { user } = useSelector((state) => state.user);

  console.log(user?.notes);

  const [noteList, SetNoteList] = useState(user?.notes || []);

  const [note, setNote] = useState("");

  const handleAddNote = async (note) => {
    SetNoteList((prev) => [...prev, { task: note, createdAt: new Date() }]);
  };

  useEffect(() => {
    let isSubsribe = true;

    const setList = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/users/addnote/${user?._id}`,
          {
            task: noteList[noteList.length - 1]?.task,
            createdAt: noteList[noteList.length - 1]?.createdAt,
          },
          { headers: { token: `Bearer ${user?.token}` } }
        );
      } catch (e) {
        console.log(e);
      }
    };

    if (isSubsribe) {
      setList();
    }

    return () => {
      isSubsribe = false;
    };
  }, [noteList, user?._id]);

  return (
    <Container>
      <Left>
        <Title>Add My Note</Title>
        <MessageArea
          name="task"
          type="text"
          value={note}
          placeholder="Type message here..."
          onChange={(e) => setNote(e.target.value)}
        />
        <SaveButton onClick={() => handleAddNote(note)}>Save</SaveButton>
      </Left>
      <Right>
        <MessageBox>
          <Top>
            <Title>All Notes</Title>
          </Top>
          <NoteList>
            {noteList.map((note, id) => (
              <Note>
                <p>{note.task}</p>
                <Time>10 min</Time>
              </Note>
            ))}
          </NoteList>
        </MessageBox>
      </Right>
    </Container>
  );
};

export default DashBoard;
