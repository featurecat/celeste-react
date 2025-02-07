export type FileItem = {
    name: string
    isDirectory: boolean
    children?: FileItem[]
}

// [ANNIE] put this in a file
export const files: FileItem[] = [
    {
        name: 'netlib',
        isDirectory: true,
        children: [
            {
                name: 'src',
                isDirectory: true,
                children: [
                    {
                        name: 'core',
                        isDirectory: true,
                        children: [
                            { name: '__init__.py', isDirectory: false },
                            { name: 'connection.py', isDirectory: false },
                            { name: 'protocol.py', isDirectory: false },
                            { name: 'exceptions.py', isDirectory: false }
                        ]
                    },
                    {
                        name: 'protocols',
                        isDirectory: true,
                        children: [
                            { name: '__init__.py', isDirectory: false },
                            { name: 'http.py', isDirectory: false },
                            { name: 'websocket.py', isDirectory: false },
                            { name: 'tcp.py', isDirectory: false },
                            { name: 'udp.py', isDirectory: false }
                        ]
                    },
                    {
                        name: 'security',
                        isDirectory: true,
                        children: [
                            { name: '__init__.py', isDirectory: false },
                            { name: 'encryption.py', isDirectory: false },
                            { name: 'certificates.py', isDirectory: false },
                            { name: 'auth.py', isDirectory: false }
                        ]
                    },
                    {
                        name: 'utils',
                        isDirectory: true,
                        children: [
                            { name: '__init__.py', isDirectory: false },
                            { name: 'parsing.py', isDirectory: false },
                            { name: 'validation.py', isDirectory: false },
                            { name: 'logging.py', isDirectory: false }
                        ]
                    },
                    { name: '__init__.py', isDirectory: false },
                    { name: 'config.py', isDirectory: false }
                ]
            },
            {
                name: 'tests',
                isDirectory: true,
                children: [
                    { name: '__init__.py', isDirectory: false },
                    {
                        name: 'unit',
                        isDirectory: true,
                        children: [
                            { name: '__init__.py', isDirectory: false },
                            { name: 'test_connection.py', isDirectory: false },
                            { name: 'test_protocol.py', isDirectory: false },
                            { name: 'test_security.py', isDirectory: false }
                        ]
                    },
                    {
                        name: 'integration',
                        isDirectory: true,
                        children: [
                            { name: '__init__.py', isDirectory: false },
                            { name: 'test_http.py', isDirectory: false },
                            { name: 'test_websocket.py', isDirectory: false }
                        ]
                    }
                ]
            },
            {
                name: 'docs',
                isDirectory: true,
                children: [
                    { name: 'api.md', isDirectory: false },
                    { name: 'getting_started.md', isDirectory: false },
                    { name: 'protocols.md', isDirectory: false },
                    {
                        name: 'examples',
                        isDirectory: true,
                        children: [
                            { name: 'http_client.py', isDirectory: false },
                            { name: 'websocket_server.py', isDirectory: false },
                            { name: 'secure_connection.py', isDirectory: false }
                        ]
                    }
                ]
            },
            { name: 'setup.py', isDirectory: false },
            { name: 'requirements.txt', isDirectory: false },
            { name: 'README.md', isDirectory: false },
            { name: 'LICENSE', isDirectory: false }
        ]
    }
];

// [ANNIE] put this in a file
export const dummyPython: string = `from blib2to3.pytree import Leaf

def format_hex(text: str) -> str:
    """
    Formats a hexadecimal string like "0x12B3"
    """
    before, after = text[:2], text[2:]
    return f"{before}{after.upper()}"

def format_scientific_notation(text: str) -> str:
    """Formats a numeric string utilizing scientific notation"""
    before, after = text.split("e")
    sign = ""
    if after.startswith("-"):
        after = after[1:]
        sign = "-"
    elif after.startswith("+"):
        after = after[1:]
    before = format_float_or_int_string(before)
    return f"{before}e{sign}{after}"

def format_complex_number(text: str) -> str:
    """Formats a complex string like \`10j\`"""
    number = text[:-1]
    suffix = text[-1]
    return f"{format_float_or_int_string(number)}{suffix}"

def format_float_or_int_string(text: str) -> str:
    """Formats a float string like "1.0"."""
    if "." not in text:
        return text

    before, after = text.split(".")
    return f"{before or 0}.{after or 0}"

def normalize_numeric_literal(leaf: Leaf) -> None:
    """Normalizes numeric (float, int, and complex) literals.

    All letters used in the representation are normalized to lowercase."""
    text = leaf.value.lower()
    if text.startswith(("0o", "0b")):
        # Leave octal and binary literals alone.
        pass
    elif text.startswith("0x"):
        text = format_hex(text)
    elif "e" in text:
        text = format_scientific_notation(text)
    elif text.endswith("j"):
        text = format_complex_number(text)
    else:
        text = format_float_or_int_string(text)
    leaf.value = text`