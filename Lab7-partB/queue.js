// Lab 7 - Part B
// queue.js "class", translated from queue.py (see bottom)
// from http://www.cs.cmu.edu/~15104/lab7/index.html

function Queue(){
    self._storage = [];
}

Queue.prototype.isEmpty(){
    return self._storage.length == 0;
}

Queue.prototype.enqueue(p){
    self._storage.push(p);
}

Queue.prototype.dequeue.(){
    head = self._storage[0];
    self._storage = self._storage.slice(1);
    return head;
}

Queue.prototype.__len__(){
    return self.storage.length;
}

Queue.prototype.__getitem__(i){
    return self.storage[i];
}

//// queue.py
// class Queue:
//     def __init__(self):
//         self._storage = []

//     def isEmpty(self):
//         return len(self._storage) == 0 

//     def enqueue(self,p):
//         self._storage.append(p) 

//     def dequeue(self):
//         head = self._storage[0]
//         self._storage = self._storage[1:]
//         return head 
    
//     def __len__(self):
//         return len(self._storage) 
  
//     def __getitem__(self, i):
//         return self._storage[i]