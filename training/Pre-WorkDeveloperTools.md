# Pre-Work: Developer Tools

## Accessing and Navigating the Command Line Interface
Topics
- Command Line Interface
- Mac, Linux, and Windows Users
- Basic Commands: cd and ls

### Command Line Interface

####  Ooey GUI
When most computer users want to find files on their computers, they use a graphical user interface (GUI). For example, on a Mac, you’d click the Finder icon, while on a Windows computer, you’d select the My Computer icon.

</br>

When developers navigate their computers, they tend to use the command line interface — commonly referred to as the “command line,” or “CLI.”

![](https://i.imgur.com/G0YPKcd.png)

#### Your Wish Is Its Command
Until video display was introduced in the mid-1960s, the command line was the only means of interacting with a computer. Today, the CLI is still preferred by programmers because it’s explicit, fast, and extremely versatile.

#### Access: Granted
We access the command line using a terminal application. Terminal applications act as a user interface for the shell, which processes your commands.

On Mac and Linux, this application is called “Terminal.” There are several terminal applications for Windows, such as “PowerShell” and “Command Prompt,” but we will be using a tool called “Git Bash”. To access the terminal application:
   - On a Mac, press command + space to bring up the spotlight search. Type in “terminal” and press return.
   - On Windows, go to the start menu, type “Git Bash” into the search, then open the application. If that doesn’t work, visit the Git website and click “Windows.”

#### Home Directory
In programming speak, all folders are called directories. A directory within another directory is called a subdirectory. A directory that contains a subdirectory is called a parent directory.

By default, our terminal starts in what is referred to as the home directory.
   - For Mac, it is /Users/yourname/.
   - For Windows, it is c:\users\yourname.
   - For Linux, it is /home/yourname.

#### Breaking This Down
![](https://i.imgur.com/3LeBbWU.png)
The terminal window is where you’ll tell the computer what to do and where the computer will display its reply.

This might be the first time you’re seeing this window, so let’s break it down:

- The prompt is the `$` that automatically shows up at the end of the first line. It’s the command line equivalent of “standby” and indicates that the terminal is ready to accept your command.
- The cursor follows the prompt. This is where the text you type will appear, just like in any other setting in which you’ve seen a cursor.
- The username of the person logged in precedes the prompt.

#### Print Working Directory
The `pwd` command stands for “print working directory.” It’s the command equivalent to asking, “Where am I?”


Just like the Finder on a Mac, your CLI places you in a particular directory on your computer. `pwd` tells you where you’re currently located within your file system.

If we were using Finder in the GUI, we’d be able to see the files and directory that are present in this folder. Try it now.

In a CLI, however, if we want to see the files and directory in our current location, we need to ask for that using another command.

#### The List Command
To find out which files are in our current directory, type `ls`, short for “list.”

Ta-da! We’re speaking in a language our computer understands. This command lists the directory’s contents, something similar to:
Applications

`Desktop`

`Documents`

`Downloads`

`Library`

`Movies`

`Music`

`Pictures`

`Public`

If you're using Windows, you may see something slightly different but will likely still have directories like `Desktop`, `Documents`, and `Downloads`.

#### The Change Directory Command
To change directories, we’ll use `cd` — “change directory” — plus the name of the directory to which we want to change. Simple enough!

`cd Documents`

Excellent, we’re in the Documents directory! Now, let’s find out what’s in the folder using `ls`:

$ `ls`

funny_cat_picture.jpg

office_stuff

world_domination_checklist.txt

Note: Again, you’ll probably see different files and directories on your own machine!

In our example, it looks like the Documents directory contains a JPG file of a funny cat picture, a folder full of “office stuff,” and a text file containing a checklist for world domination. Your Documents directory’s contents are probably different.

#### A Caveat
This wouldn’t be an authentic language-learning experience if there weren’t a few caveats.

Operating systems and installed applications require lots of hidden files that aren’t always relevant to everyday users. But there will be cases where, as a programmer, you’ll want to view them.

We can do this with something called a flag, which is an additional command argument that modifies the behavior of the base command.

Flags start with the `-` prefix.
Type ls -a, which is the list command followed by the `-a` flag.
This means, “Show me all of the files in my working directory and do not ignore entries that start with a period.”

Your output may look different but should show previously hidden files, like so:

$ `ls -a`

funny_cat_picture.jpg

office_stuff

world_domination_checklist.txt

.bash_profile

.bash_history

#### Parent Directory
Let’s say we want to leave the Documents folder and return to our parent directory. To do so, we use the `cd` command followed by a space and two dots:

`cd ..`

> The dots imply “parent directory.”

Now, if we type `pwd`, we’ll see that we’re in our home directory, which may look like `/Users/yourname` if you’re on a Mac.

If we were deeper in our file structure, we could use the `cd ~` command.
The tilde (`~`) is a shortcut for the home directory of the terminal’s current user.

> How would you find out which directory your terminal “is in”?  `pwd`

#### Creating Directories
To create a folder called `myfolder`, type `mkdir myfolder`. Now, if we inspect the contents of our home folder using ls, we should see something similar to the following:
Applications

Desktop

Documents

Downloads

Library

Movies

Music

myfolder

Pictures

Public

Note the addition of the myfolder directory.

#### Creating and Viewing Files
Let’s move into `myfolder` by typing `cd myfolder`. Once we’re inside our new directory, we’ll create a new file.

Say we want to make HTML and CSS files — the beginnings of a website!

To accomplish this, we’ll use the `touch` command. We can even make multiple files and file types at the same time by separating them with a space, like this:

- `touch` `index.html` `style.css`

#### Removing Files
Now that we’ve created a few files, let’s remove one using the `rm` command:

Note: Be careful when using `rm`. Unlike moving files to the trash or recycle bin, deleting files with `rm` removes them permanently!

`rm style.css`

We can verify its removal by typing `ls`, which should only return index.html.

#### Removing Directories
Similar to how we removed our file, we can use `rm` to remove directories as well. Let’s start by moving to our parent directory by typing `cd ..`. We should now be in our home folder.

Type `rm -r` myfolder to remove the myfolder directory.

What is this `-r` flag we’re using? It stands for recursive and states that we will remove the directory along with any subdirectories or child directories. It is impossible to have a child directory without a parent directory, therefore the `-r` flag is always required when removing directories.

Note: Another option, assuming the directory is empty, is `rmdir`, which is functionally equivalent to `rm -r` when executed against an empty directory.

![](https://i.imgur.com/B4Lgh1u.png)
![](https://i.imgur.com/4lsCKGt.png)