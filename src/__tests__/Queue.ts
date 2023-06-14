import Queue from "@code/Queue";

test("queue", function () {
    const list = new Queue<number>();

    console.log("begining", list)
    // list is empty
    expect(list.peek()).toEqual(undefined)
    
    list.enqueue(5);
    list.enqueue(7);
    list.enqueue(9);

    console.log("middle", list)

    expect(list.peek()).toEqual(5);
    expect(list.deque()).toEqual(5);
    expect(list.length).toEqual(2);

    list.enqueue(11);

    expect(list.deque()).toEqual(7);
    expect(list.deque()).toEqual(9);
    expect(list.peek()).toEqual(11);
    expect(list.deque()).toEqual(11);
    expect(list.deque()).toEqual(undefined);
    expect(list.length).toEqual(0);

    // just wanted to make sure that I could not blow up myself when i remove
    // everything
    console.log("end",list)

    list.enqueue(69);

    expect(list.peek()).toEqual(69);
    expect(list.length).toEqual(1);
});
