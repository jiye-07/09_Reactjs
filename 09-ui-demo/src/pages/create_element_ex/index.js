import React, { memo, useCallback, useRef } from "react";

import styled from "styled-components";

const CreateElementExContainer = styled.div`
  input,
  button {
    margin-right: 10px;
  }

  .list {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding: 5px 10px;
      cursor: pointer;
      border-bottom: 1px dotted #d5d5d5;

      &:first-child {
        border-top: 1px dotted #d5d5d5;
      }
      &.blue {
        background-color: #06f2;
      }
      &.orange {
        background-color: #f602;
      }
      &.pink {
        background-color: #f0f2;
      }
    }
  }
`;

const CreateElementEx = memo(() => {
  const comment = useRef();
  const list = useRef();
  const getItem = useCallback((className) => {
    const li = document.createElement("li");

    li.classList.add("item", className);
    li.innerHTML = comment.current.value;
    li.addEventListener("click", (e) => {
      e.currentTarget.remove();
    });

    return li;
  }, []);

  //
  const onAppendChildClick = useCallback((e) => {
    const li = getItem("blue");
    list.current.appendChild(li);
  }, []);
  //
  const onInsertBefore1Click = useCallback((e) => {
    list.current.insertBefore(getItem("orange"), null);
  }, []);
  //
  const onInsertBefore2Click = useCallback((e) => {
    list.current.insertBefore(getItem("pink"), list.current.querySelector("li:first-child"));
  }, []);
  return (
    <CreateElementExContainer>
      <h2>CreateElementEx</h2>

      <input type="text" ref={comment} />
      <button type="button" onClick={onAppendChildClick}>
        appendChild
      </button>
      <button type="button" onClick={onInsertBefore1Click}>
        insertBefore1
      </button>
      <button type="button" onClick={onInsertBefore2Click}>
        insertBefore2
      </button>
      <hr />

      <ul className="list" ref={list}></ul>
    </CreateElementExContainer>
  );
});

export default CreateElementEx;
