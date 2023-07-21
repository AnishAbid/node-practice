
     /*
     Problem:
    A teacher asks the class to open their books to a page number.
    A student can either start turning pages from the front of the book or from the back of the book.
    They always turn pages one at a time. When they open the book, page  is always on the right side.
    When they flip page , they see pages  and . Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is  pages long, and a student wants to turn to page , what is the minimum number of pages to turn? They can start at the beginning or the end of the book.
    Given  and , find and print the minimum number of pages that must be turned in order to arrive at page .
    Example:
    n=5
    p=3
    if the student wants to get to page , they open the book to page , flip  page and they are on the correct page. If they open the book to the last page, page , they turn  page and are at the correct page. Return .
    Complete the pageCount function in the editor below.
    pageCount has the following parameter(s):
    int n: the number of pages in the book
    int p: the page number to turn to
    Returns the minimum number of pages to turn
     */
    /* 
    Solution-1 */
    function flipPage_1(p,n){
    let start = 0
    let end = 0
    for(let i=0;i<=n;i+=2){
        if(i==p|| i+1==p){
            start = i<1?i:i-1
            break
        }  
    }
    let flip=0
    for(let i = (n%2==0?n+1:n);i>=0;i-=2){
        if(i==p|| i-1==p){
            end = flip
            break
        }
        flip+=1  
    }
    console.log(start<end?start:end)
    return start<end?start:end
    }

    function flipPage_2(p,n){
    if (p % 2 === 0 && n % 2 > 0) p += 1;
    if (p % 2 > 0 && n % 2 === 0) p -= 1;
    let result = Math.floor(Math.min(p/2, (n/2) - (p/2)))
     return result>=0?result:0
    }
    
    /*
    uncomment the line to invoke the function
    flipPage_1(3,5)
    flipPage_2(3,5) 
     */
